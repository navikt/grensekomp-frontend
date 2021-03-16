import mapBackendErrormessaages from './mapBackendErrormessages';

describe('mapBackendErrormessaages', () => {
  it('should return the correct string', () => {
    expect(mapBackendErrormessaages('RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint')).toEqual(
      'Refusjonsdager kan ikke overstige periodelengden'
    );
  });

  it('should return something more readable if we dont have a predefined errormessager', () => {
    expect(mapBackendErrormessaages('DetteErEnUkjentFeilConstraint')).toEqual('Dette er en ukjent feil');
  });

  it('should return an empty string if we give undefined as param', () => {
    expect(mapBackendErrormessaages(undefined)).toEqual('');
  });

  it('should return an empty string if we give an empty string as param', () => {
    expect(mapBackendErrormessaages('')).toEqual('');
  });
});
