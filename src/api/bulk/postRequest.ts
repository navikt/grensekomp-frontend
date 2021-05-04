import HttpStatus from '../HttpStatus';
import BulkValidationResponse from './BulkValidationResponse';

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
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'no'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        if (response.status === HttpStatus.Successfully) {
          return {
            status: response.status,
            validationResponses: await response.json()
          } as BulkValidationResponse;
        }
        return {
          status: response.status,
          validationResponses: []
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
