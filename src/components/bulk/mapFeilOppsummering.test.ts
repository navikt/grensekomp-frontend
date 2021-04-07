import BulkState from '../../state/bulk/BulkState';
import mapFeilOppsummering from './mapFeilOppsummering';

describe('mapFeilOppsummering', () => {
  it('should map correctly', () => {
    const state = {
      orgnrError: 'feil_orgnr',
      items: [
        {
          uniqueKey: 'feil1',
          fnrError: 'Feil1_fnr',
          fomError: 'Feil1_fom',
          tomError: 'Feil1_tom',
          dagerError: 'Feil1_dager',
          beloepError: 'Feil1_beloep',
          genericError: 'Ukjent feil'
        },
        {
          uniqueKey: 'feil2',
          fnrError: 'Feil2_fnr',
          fomError: 'Feil2_fom',
          tomError: 'Feil2_tom',
          dagerError: 'Feil2_dager',
          beloepError: 'Feil2_beloep'
        }
      ]
    } as BulkState;
    const feilmeldinger = mapFeilOppsummering(state);
    expect(feilmeldinger.length).toBe(12);
    expect(feilmeldinger[0].feilmelding).toBe('feil_orgnr');
    expect(feilmeldinger[1].skjemaelementId).toBe('fnr_feil1');
    expect(feilmeldinger[1].feilmelding).toBe('Rad 1: Feil1_fnr');

    expect(feilmeldinger[2].skjemaelementId).toBe('fom_feil1');
    expect(feilmeldinger[2].feilmelding).toBe('Rad 1: Feil1_fom');

    expect(feilmeldinger[3].skjemaelementId).toBe('tom_feil1');
    expect(feilmeldinger[3].feilmelding).toBe('Rad 1: Feil1_tom');

    expect(feilmeldinger[4].skjemaelementId).toBe('dager_feil1');
    expect(feilmeldinger[4].feilmelding).toBe('Rad 1: Feil1_dager');

    expect(feilmeldinger[5].skjemaelementId).toBe('beloep_feil1');
    expect(feilmeldinger[5].feilmelding).toBe('Rad 1: Feil1_beloep');

    expect(feilmeldinger[6].skjemaelementId).toBe('ukjent');
    expect(feilmeldinger[6].feilmelding).toBe('Rad 1: Ukjent feil');
  });
});
