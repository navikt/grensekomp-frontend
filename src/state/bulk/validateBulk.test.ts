import BulkState from './BulkState';
import validateBulk from './validateBulk';
import { languageInit } from '../../language/languageInit';
import i18next from 'i18next';
import LanguageBundle from '../../config/LanguageBundle';
import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

describe('validateBulk', () => {
  it('should map all errors', () => {
    const fromState: BulkState = {
      validated: true,
      feilmeldinger: [],
      items: [
        {
          fom: undefined,
          tom: undefined
        }
      ]
    };
    const state = validateBulk(fromState, languageInit(i18next, Language.nb, LanguageBundle));
    expect(state.orgnrError).not.toBeUndefined();
    expect(state.bekreftError).not.toBeUndefined();
    expect(state.items.length).toBe(1);
    expect(state.items[0].fnrError).not.toBeUndefined();
    expect(state.items[0].fomError).not.toBeUndefined();
    expect(state.items[0].tomError).not.toBeUndefined();
    expect(state.items[0].beloepError).not.toBeUndefined();
    expect(state.items[0].landError).not.toBeUndefined();
    expect(state.items[0].genericError).toBeUndefined();
    expect(state.feilmeldinger.length).toBe(7);
  });
});
