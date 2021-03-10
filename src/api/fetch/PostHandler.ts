import { PostPromise } from './PostPromise';
import ValidationResponse from '../ValidationResponse';
import HttpStatus from '../HttpStatus';

export const TimeoutPromise = (timeout: number = 10000) =>
  new Promise((resolve, reject) => setTimeout(() => reject('Tidsavbrudd'), timeout)).then(() => {
    return {
      status: HttpStatus.Timeout
    } as ValidationResponse;
  });

const PostHandler = (path: string, payload: any, timeout: number = 10000): Promise<ValidationResponse> => {
  return Promise.race([TimeoutPromise(timeout), PostPromise(path, payload)]);
};

export default PostHandler;
