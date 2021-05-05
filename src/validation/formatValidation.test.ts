import formatValidation from './formatValidation';
import LangKey from '../locale/LangKey';
import { languageInit } from '../locale/LocaleProvider';

describe('formatValidation', () => {
  it('should format', () => {
    const vr = {
      key: LangKey.FOM_ERROR
    };
    expect(formatValidation(vr, languageInit('nb'))).toBe('Feil dato');
  });
});
