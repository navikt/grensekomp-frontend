import postRequest from './postRequest';
import BulkRequest from './BulkRequest';
import Paths from '../../config/Paths';
import BulkValidationResponse from './BulkValidationResponse';

const postBulk = (basePath: string, request: BulkRequest, lang: string): Promise<BulkValidationResponse> => {
  return postRequest(basePath + Paths.Bulk, request, lang);
};

export default postBulk;
