export interface ValidationResponse {
  violations: ValidationProblemDetail[];
  type?: string;
  title?: string;
  status: number;
  detail?: string;
  instance?: string;
}

export interface ValidationProblemDetail {
  frontendIndex?: number;
  validationType: string;
  message: string;
  propertyPath: string;
  invalidValue?: any;
}

export interface BulkValidationResponse extends Array<BulkValidation> {}

export interface BulkValidation {
  status: string;
  validationErrors: ValidationProblemDetail[];
}

export default ValidationResponse;
