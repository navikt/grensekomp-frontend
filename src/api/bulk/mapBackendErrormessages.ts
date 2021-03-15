const errorMessages = {
  RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint: 'Refusjonsdager kan ikke overstige periodelengden'
};

const mapBackendErrormessaages = (errorMessage: string): string => {
  const descriptiveErrorMessage = errorMessages[errorMessage];

  if (!errorMessage) {
    return '';
  }

  if (descriptiveErrorMessage) {
    return descriptiveErrorMessage;
  }

  const error = errorMessage
    .replace('Constraint', '')
    .split(/(\d+|[A-Z][a-z]*)/)
    .filter((v) => v !== '')
    .join(' ');

  let res = error[0];

  for (var i = 1; i < error.length; ++i) {
    res += error[i].toLowerCase();
  }

  return res;
};

export default mapBackendErrormessaages;
