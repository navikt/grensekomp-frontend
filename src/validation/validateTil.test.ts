import { validateTil } from './validateTil';
import { parseDato } from '../utils/dato/parseDato';

describe('validateTil', () => {
  it('should not show errors when valid', () => {
    expect(validateTil(parseDato('01.02.2021'), parseDato('03.04.2021'), false)).toBeUndefined();
    expect(validateTil(parseDato('01.02.2021'), parseDato('03.04.2021'), true)).toBeUndefined();
  });

  it('should show errors when errors in dates', () => {
    expect(validateTil(parseDato('aa.02.2021'), parseDato('03.04.2021'), true)).not.toBeUndefined();
    expect(validateTil(parseDato('01.02.2021'), parseDato('aa.04.2021'), true)).not.toBeUndefined();
  });

  it('should show errors when tom is before fom', () => {
    expect(validateTil(parseDato('03.04.2021'), parseDato('01.02.2021'), true)).not.toBeUndefined();
  });

  it('should show errors when before earliest valid date', () => {
    expect(validateTil(parseDato('28.01.2021'), parseDato('28.01.2021'), true)).not.toBeUndefined();
  });

  it('should not show errors when valid and equal dates', () => {
    expect(validateTil(parseDato('01.02.2021'), parseDato('01.02.2021'), false)).toBeUndefined();
    expect(validateTil(parseDato('01.02.2021'), parseDato('01.02.2021'), true)).toBeUndefined();
  });

  it('should not show errors when fra is undefined', () => {
    expect(validateTil(undefined, parseDato('03.04.2021'), true)).toBeUndefined();
  });

  it('should not show errors when til is undefined and not required', () => {
    expect(validateTil(parseDato('03.04.2021'), undefined, false)).toBeUndefined();
  });

  it('should show error when til is undefined', () => {
    expect(validateTil(parseDato('03.04.2021'), undefined, true)).not.toBeUndefined();
  });
});
