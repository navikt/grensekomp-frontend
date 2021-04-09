import BulkValidationResponse from '../api/bulk/BulkValidationResponse';

export const testGenericResponse: BulkValidationResponse = {
  status: 200,
  validationResponses: [
    {
      status: 'GENERIC_ERROR',
      validationErrors: null,
      genericMessage:
        'received exception io.ktor.client.features.ClientRequestException: Client request(https://login.microsoftonline.com/abc-def-ghi-jkl/oauth2/v2.0/token) invalid: 400 Bad Request when invoking tokenendpoint=https://login.microsoftonline.com/abc-def-ghi-jkl/oauth2/v2.0/token',
      referenceNumber: null
    }
  ]
};

export const testUnknownResponse: BulkValidationResponse = {
  status: 200,
  validationResponses: [
    {
      status: 'VALIDATION_ERRORS',
      validationErrors: [
        {
          validationType: 'Feil',
          message: 'Feil',
          propertyPath: 'unknown_thingy'
        }
      ],
      genericMessage: null,
      referenceNumber: null
    }
  ]
};

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
