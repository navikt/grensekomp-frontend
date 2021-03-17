import mapBackendErrorMessages from './mapBackendErrorMessages';

describe('mapBackendErrormessaages', () => {
  it('should return the correct string', () => {
    expect(mapBackendErrorMessages('RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint')).toEqual(
      'Refusjonsdager kan ikke overstige periodelengden'
    );
  });

  it('should return something more readable if we dont have a predefined errormessager', () => {
    expect(mapBackendErrorMessages('DetteErEnUkjentFeilConstraint')).toEqual('Dette er en ukjent feil');
  });

  it('should return an empty string if we give undefined as param', () => {
    expect(mapBackendErrorMessages(undefined)).toEqual('');
  });

  it('should return an empty string if we give an empty string as param', () => {
    expect(mapBackendErrorMessages('')).toEqual('');
  });
});
