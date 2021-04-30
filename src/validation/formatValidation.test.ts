import formatValidation from './formatValidation';
import Key from '../locales/Key';
import { languageInit } from '../locales/LanguageProvider';

describe('formatValidation', () => {
  it('should format', () => {
    const vr = {
      key: Key.FOM_ERROR
    };
    expect(formatValidation(vr, languageInit('nb'))).toBe('Feil dato');
  });
});
