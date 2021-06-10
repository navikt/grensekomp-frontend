import formatValidation from './formatValidation';
import LangKey from '../language/LangKey';
import { languageInit } from '../language/languageInit';
import i18next from 'i18next';
import LanguageBundle from '../config/LanguageBundle';
import { Language } from '@navikt/helse-arbeidsgiver-felles-frontend';

describe('formatValidation', () => {
  it('should format', () => {
    const vr = {
      key: LangKey.FOM_ERROR
    };
    expect(formatValidation(vr, languageInit(i18next, Language.nb, LanguageBundle))).toBe('Feil dato');
  });
});
