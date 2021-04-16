import HttpStatus from '../HttpStatus';
import DeleteResponse from './DeleteResponse';

const DeletePromise = (path: string) =>
  fetch(path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    method: 'DELETE'
  })
    .then(async (response) => {
      switch (response.status) {
        case HttpStatus.Successfully:
          return {
            status: response.status,
            json: await response.json()
          } as DeleteResponse;
        case HttpStatus.UnprocessableEntity:
          return response.json();
        default:
          return Promise.reject(response.status);
      }
    })
    .catch((code) => {
      return Promise.reject(code ?? HttpStatus.Unknown);
    });

export default DeletePromise;
