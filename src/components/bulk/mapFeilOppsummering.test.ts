import BulkState from '../../state/bulk/BulkState';
import mapFeilOppsummering from './mapFeilOppsummering';
import { languageInit } from '../../language/languageInit';
import i18next from 'i18next';
import LanguageBundle from '../../config/LanguageBundle';
import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

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
          beloepError: 'Feil1_beloep',
          genericError: 'Ukjent feil'
        },
        {
          uniqueKey: 'feil2',
          fnrError: 'Feil2_fnr',
          fomError: 'Feil2_fom',
          tomError: 'Feil2_tom',
          beloepError: 'Feil2_beloep'
        }
      ]
    } as BulkState;
    const feilmeldinger = mapFeilOppsummering(state, languageInit(i18next, Language.nb, LanguageBundle));
    expect(feilmeldinger.length).toBe(10);
    expect(feilmeldinger[0].feilmelding).toBe('feil_orgnr');
    expect(feilmeldinger[1].skjemaelementId).toBe('fnr_feil1');
    expect(feilmeldinger[1].feilmelding).toBe('Rad 1: Feil1_fnr');

    expect(feilmeldinger[2].skjemaelementId).toBe('fom_feil1');
    expect(feilmeldinger[2].feilmelding).toBe('Rad 1: Feil1_fom');

    expect(feilmeldinger[3].skjemaelementId).toBe('tom_feil1');
    expect(feilmeldinger[3].feilmelding).toBe('Rad 1: Feil1_tom');

    expect(feilmeldinger[4].skjemaelementId).toBe('beloep_feil1');
    expect(feilmeldinger[4].feilmelding).toBe('Rad 1: Feil1_beloep');

    expect(feilmeldinger[5].skjemaelementId).toBe('ukjent');
    expect(feilmeldinger[5].feilmelding).toBe('Rad 1: Ukjent feil');
  });
});
