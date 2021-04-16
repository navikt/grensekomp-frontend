import DeleteResponse from './DeleteResponse';
import DeletePromise from './DeletePromise';
import TimeoutPromise from './TimeoutPromise';

const DeleteHandler = (path: string, timeout: number = 10000): Promise<DeleteResponse> => {
  return Promise.race([TimeoutPromise(timeout), DeletePromise(path)]);
};

export default DeleteHandler;
