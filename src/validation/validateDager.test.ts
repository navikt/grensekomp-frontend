import Dato from '../utils/dato/Dato';
import { parseDato } from '../utils/dato/parseDato';
import validateDager from './validateDager';
import LangKey from '../locales/LangKey';

describe('validateDager', () => {
  it('should verify that there is a dager when required', () => {
    expect(validateDager('123', 1000, true, undefined, undefined)).toBeUndefined();
  });

  it('should verify that there is a dager and not required', () => {
    expect(validateDager('123', 1000, false, undefined, undefined)).toBeUndefined();
  });

  it('should verify that there is a dager missing when required', () => {
    expect(validateDager(undefined, 1000, true, undefined, undefined)).not.toBeUndefined();
  });

  it('should not verify that there is a dager missing when not required', () => {
    expect(validateDager(undefined, 1000, false, undefined, undefined)).toBeUndefined();
  });

  it('should verify that there is a dager missing when required and dager is 0', () => {
    expect(validateDager(undefined, 1000, true, undefined, undefined)).not.toBeUndefined();
  });

  it('should verify that dager is numeric when required and dager is 0', () => {
    expect(validateDager('notanumber', 1000, true, undefined, undefined)).not.toBeUndefined();
    expect(validateDager('notanumber', 1000, true, undefined, undefined)?.key).toBe(LangKey.DAY_DIGITS_ONLY);
  });

  it('should return undefined when not required', () => {
    expect(validateDager(undefined, 1000, false, undefined, undefined)).toBeUndefined();
  });

  it('should return an error when the dager string has no content', () => {
    expect(validateDager('', 1000, true, undefined, undefined)).not.toBeUndefined();
    expect(validateDager('', 1000, true, undefined, undefined)?.key).toBe(LangKey.DAY_MISSING);
  });

  it('should return an error when dager is undefined', () => {
    expect(validateDager(undefined, 1000, true, undefined, undefined)).not.toBeUndefined();
    expect(validateDager(undefined, 1000, true, undefined, undefined)?.key).toBe(LangKey.DAY_MISSING);
  });

  it('should return an error when dager is more than max', () => {
    expect(validateDager('2000', 1000, true, undefined, undefined)).not.toBeUndefined();
    expect(validateDager('2000', 1000, true, undefined, undefined)?.key).toBe(LangKey.DAY_TOO_HIGH);
  });

  it('should return an error when there are more dager than available days', () => {
    const fra: Dato = parseDato('01.02.2020');
    const til: Dato = parseDato('10.02.2020');
    expect(validateDager('20', 1000, true, fra, til)).not.toBeUndefined();
    expect(validateDager('20', 1000, true, fra, til)?.key).toBe(LangKey.DAY_INVALID);
  });
});
