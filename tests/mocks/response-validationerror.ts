const validationError = [
  {
    status: 'VALIDATION_ERRORS',
    validationErrors: [
      {
        validationType: 'BosattINorgeConstraint',
        message:
          'Ordningen gjelder bare de som ikke bor i Norge. Denne arbeidstakeren er registrert med bostedsadresse i Norge i perioden.',
        propertyPath: 'identitetsnummer',
        invalidValue: '26077025269'
      }
    ],
    genericMessage: null,
    referenceNumber: null
  }
];

export default validationError;
