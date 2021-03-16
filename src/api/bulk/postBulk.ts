import postRequest from '../postRequest';
import BulkRequest from './BulkRequest';
import Paths from '../Paths';
import BulkValidationResponse from './BulkValidationResponse';

const postBulk = (basePath: string, request: BulkRequest): Promise<BulkValidationResponse> => {
  return postRequest(basePath + Paths.Bulk, request);
};

export default postBulk;
