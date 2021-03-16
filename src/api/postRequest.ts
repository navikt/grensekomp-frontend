import HttpStatus from './HttpStatus';
import ValidationResponse from './ValidationResponse';
import BulkValidationResponse from './bulk/BulkValidationResponse';

export const mapViolations = (status: number, json: any): ValidationResponse => ({
  status,
  violations: json[0].validationErrors || []
});

const postRequest = async (path: string, payload: any, timeout: number = 10000): Promise<BulkValidationResponse> => {
  return Promise.race([
    new Promise<BulkValidationResponse>((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        reject({ status: HttpStatus.Timeout, violations: [] });
      }, timeout);
    }).catch(
      () =>
        ({
          status: HttpStatus.Timeout,
          validationResponses: []
        } as BulkValidationResponse)
    ),
    fetch(path, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        const json = await response.json();
        return {
          status: response.status,
          validationResponses: json
        } as BulkValidationResponse;
      })
      .catch(() => {
        return {
          status: HttpStatus.Error,
          validationResponses: []
        } as BulkValidationResponse;
      })
  ]);
};

export default postRequest;
