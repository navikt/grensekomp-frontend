import { ValidationProblemDetail } from '../ValidationResponse';

interface BulkValidationResponse {
  status: number;
  validationResponses: BulkValidation[];
}
export interface BulkValidation {
  status: string;
  genericMessage: string | null;
  referenceNumber: string | null;
  validationErrors: ValidationProblemDetail[] | null;
}

export default BulkValidationResponse;
