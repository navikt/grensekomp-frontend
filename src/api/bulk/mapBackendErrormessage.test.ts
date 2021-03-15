import mapBackendErrormessaages from './mapBackendErrormessages';

describe('mapBackendErrormessaages', () => {
  it('should return the correct string', () => {
    expect(mapBackendErrormessaages('RefusjonsdagerKanIkkeOverstigePeriodelengdenConstraint')).toEqual(
      'Refusjonsdager kan ikke overstige periodelengden'
    );
  });

  it('should return the correct string', () => {
    expect(mapBackendErrormessaages('DetteErEnUkjentFeilConstraint')).toEqual('Dette er en ukjent feil');
  });
});
