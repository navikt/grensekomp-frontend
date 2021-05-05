import validateBekreft from './validateBekreft';
import Key from '../locales/Key';

describe('validateBekreft', () => {
  it('should not produce error when checked', () => {
    expect(validateBekreft(true, false)?.key).toBeUndefined();
  });

  it('should not produce error', () => {
    expect(validateBekreft(false, false)?.key).toBeUndefined();
  });

  it('should produce error message when not checked', () => {
    expect(validateBekreft(false, true)?.key).toBe(Key.BEKREFT);
  });

  it('should give no errors when checked', () => {
    expect(validateBekreft(true, true)?.key).toBeUndefined();
  });
});
