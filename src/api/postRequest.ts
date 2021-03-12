import HttpStatus from './HttpStatus';
import ValidationResponse from './ValidationResponse';

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
        const json = await response.json();
        if (json.length > 0) {
          return mapViolations(response.status, json);
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
