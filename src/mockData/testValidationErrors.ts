const testValidationErrors = [
  {
    status: 'VALIDATION_ERRORS',
    validationErrors: [
      {
        validationType: 'IdentitetsnummerConstraint',
        message: '',
        propertyPath: 'identitetsnummer',
        invalidValue: '123'
      },
      {
        validationType: 'LessOrEqual',
        message: 'Det kan ikke kreves refusjon for datoer fremover i tid',
        propertyPath: 'perioder[0].tom',
        invalidValue: '2021-03-19'
      }
    ],
    genericMessage: null,
    referenceNumber: null
  }
];

export default testValidationErrors;
