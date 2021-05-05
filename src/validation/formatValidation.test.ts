import formatValidation from './formatValidation';
import LangKey from '../locales/LangKey';
import { languageInit } from '../locales/LanguageProvider';

describe('formatValidation', () => {
  it('should format', () => {
    const vr = {
      key: LangKey.FOM_ERROR
    };
    expect(formatValidation(vr, languageInit('nb'))).toBe('Feil dato');
  });
});
