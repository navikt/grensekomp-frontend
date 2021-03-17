import BulkValidationResponse from '../api/bulk/BulkValidationResponse';

const testValidationResponse: BulkValidationResponse = {
  status: 200,
  validationResponses: [
    {
      status: 'VALIDATION_ERRORS',
      validationErrors: [
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'identitetsnummer'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'virksomhetsnummer'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'periode.fom'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'periode.tom'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'periode.beloep'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'periode.antallDagerMedRefusjon'
        },
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'periode'
        }
      ],
      genericMessage: null,
      referenceNumber: null
    }
  ]
};

export default testValidationResponse;
