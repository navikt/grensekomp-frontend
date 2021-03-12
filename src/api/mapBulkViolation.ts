import ValidationResponse, { BulkValidationResponse, ValidationProblemDetail } from './ValidationResponse';

const mapBulkViolation = (status: number, bulkValidationResponse: BulkValidationResponse): ValidationResponse => {
  let violations: ValidationProblemDetail[] = [];
  bulkValidationResponse.forEach((bulkValidation, index) => {
    bulkValidation.validationErrors.forEach((validationError) => {
      validationError.frontendIndex = index;
      violations.push(validationError);
    });
  });
  return {
    status,
    violations
  };
};

export default mapBulkViolation;
