import isNumericString from './isNumericString';

describe('isNumericString', () => {
  it('should ', () => {
    expect(isNumericString('')).toBe(false);
  });

  it('should not allow letters', () => {
    expect(isNumericString('a')).toBe(false);
    expect(isNumericString('a1')).toBe(false);
    expect(isNumericString('a1a')).toBe(false);
    expect(isNumericString('1a')).toBe(false);
  });

  it('should not allow period', () => {
    expect(isNumericString('1.5')).toBe(false);
  });

  it('should fail missing decimals', () => {
    expect(isNumericString('0,')).toBe(false);
  });

  it('should fail without digit before comma', () => {
    expect(isNumericString(',5')).toBe(false);
  });

  it('should handle single digit', () => {
    expect(isNumericString('1')).toBe(true);
  });

  it('should handle decimal', () => {
    expect(isNumericString('1,5')).toBe(true);
  });

  it('should handle decimal with zero', () => {
    expect(isNumericString('0,5')).toBe(true);
  });

  it('should return false when the number is undefined', () => {
    expect(isNumericString(undefined)).toBe(false);
  });
});
