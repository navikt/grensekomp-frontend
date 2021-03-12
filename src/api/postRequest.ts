import HttpStatus from './HttpStatus';
import ValidationResponse, { BulkValidationResponse } from './ValidationResponse';
import mapBulkViolation from './mapBulkViolation';

export const mapViolations = (status: number, json: any): ValidationResponse => ({
  status,
  violations: json[0].validationErrors || []
});

const postRequest = async (path: string, payload: any, timeout: number = 10000): Promise<ValidationResponse> => {
  return Promise.race([
    new Promise<ValidationResponse>((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        reject({ status: HttpStatus.Timeout, violations: [] });
      }, timeout);
    }).catch(() => ({
      status: HttpStatus.Timeout,
      violations: []
    })),
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
        const json: BulkValidationResponse = await response.json();
        const matchesFail = json.find((j) => j.status !== 'OK');
        if (matchesFail) {
          return mapBulkViolation(response.status, json);
        }
        return {
          status: HttpStatus.Successfully,
          violations: []
        } as ValidationResponse;
      })
      .catch(() => {
        return {
          status: HttpStatus.Error,
          violations: []
        };
      })
  ]);
};

export default postRequest;
