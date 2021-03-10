import ValidationResponse from '../ValidationResponse';
import postRequest from '../postRequest';
import BulkRequest from './BulkRequest';
import Paths from '../Paths';

const postBulk = (basePath: string, request: BulkRequest): Promise<ValidationResponse> => {
  return postRequest(basePath + Paths.Bulk, request);
};

export default postBulk;
