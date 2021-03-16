import BulkValidationResponse from '../api/bulk/BulkValidationResponse';

const testValidationResponse: BulkValidationResponse = {
  status: 200,
  validationResponses: [
    {
      status: 'VALIDATION_ERRORS',
      validationErrors: [
        {
          validationType: 'Greater',
          message: 'Must be greater than 0',
          propertyPath: 'periode.beloep',
          invalidValue: 0.0
        },
        {
          validationType: 'RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint',
          message: '',
          propertyPath: 'periode',
          invalidValue: {
            fom: '2021-03-01',
            tom: '2021-03-04',
            antallDagerMedRefusjon: 0,
            beloep: 0.0
          }
        },
        {
          validationType: 'TomPeriodeKanIkkeHaBeloepConstraint',
          message: '',
          propertyPath: 'periode',
          invalidValue: {
            fom: '2021-03-01',
            tom: '2021-03-04',
            antallDagerMedRefusjon: 0,
            beloep: 0.0
          }
        }
      ],
      genericMessage: null,
      referenceNumber: null
    }
  ]
};

export default testValidationResponse;
