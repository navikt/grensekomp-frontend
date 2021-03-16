import BulkValidationResponse from '../api/bulk/BulkValidationResponse';

const testValidationResponse: BulkValidationResponse = {
  status: 200,
  validationResponses: [
    {
      status: 'VALIDATION_ERRORS',
      validationErrors: [
        {
          validationType: 'TomPeriodeKanIkkeHaBeloepConstraint',
          message: '',
          propertyPath: 'periode',
          invalidValue: {
            fom: '2021-03-01',
            tom: '2021-03-05',
            antallDagerMedRefusjon: 5125125,
            beloep: 5.0
          }
        }
      ],
      genericMessage: null,
      referenceNumber: null
    }
  ]
};

export default testValidationResponse;
