import OversiktKravState from '../../state/oversikt-krav/OversiktKravState';
import mapFeilOppsummering from './mapFeilOppsummering';

describe('mapFeilOppsummering', () => {
  it('should', () => {
    const state = {
      orgnrError: 'feil_orgnr',
      items: [
        {
          uniqueKey: 'feil1'
        },
        {
          uniqueKey: 'feil2'
        }
      ]
    } as OversiktKravState;
    const feilmeldinger = mapFeilOppsummering(state);
    expect(feilmeldinger.length).toBe(1);
    expect(feilmeldinger[0].feilmelding).toBe('feil_orgnr');
  });
});
