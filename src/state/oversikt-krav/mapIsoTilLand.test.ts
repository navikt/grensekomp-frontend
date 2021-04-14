import mapIsoTilLand from './mapIsoTilLand';

describe('mapIsoTilLand', () => {
  it('should map SWE to Sverige', () => {
    expect(mapIsoTilLand('SWE')).toEqual('Sverige');
  });

  it('should map UXX to undefined', () => {
    expect(mapIsoTilLand('UXX')).toBeUndefined();
  });
});
