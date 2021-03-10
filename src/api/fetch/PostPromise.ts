import HttpStatus from '../HttpStatus';
import ValidationResponse from '../ValidationResponse';
import { mapViolations } from '../postRequest';

export const PostPromise = (path: string, payload: any) =>
  fetch(path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(async (response) => {
    switch (response.status) {
      case HttpStatus.Successfully:
        return {
          status: response.status
        } as ValidationResponse;
      case HttpStatus.Unauthorized:
        return Promise.reject({
          status: response.status
        });
      case HttpStatus.UnprocessableEntity:
        return mapViolations(
          response.status,
          response.status == HttpStatus.UnprocessableEntity ? await response.json() : {}
        );
      default:
        return {
          status: response.status
        } as ValidationResponse;
    }
  });
