import validateBeloep from './validateBeloep';

describe('validateBeloep', () => {
  it('should verify that ther is a beloep when required', () => {
    expect(validateBeloep(123, 1000, true)).toBeUndefined();
  });

  it('should verify that there is a beloep and not required', () => {
    expect(validateBeloep(123, 1000, false)).toBeUndefined();
  });

  it('should verify that there beløp is valid', () => {
    expect(validateBeloep(123, 123, true)).toBeUndefined();
  });

  it('should verify that there beløp is valid', () => {
    expect(validateBeloep(123, 122, true)).not.toBeUndefined();
  });

  it('should verify that there is a beloep missing when required', () => {
    expect(validateBeloep(undefined, 1000, true)).not.toBeUndefined();
  });

  it('should not verify that there is a beloep missing when not required', () => {
    expect(validateBeloep(undefined, 1000, false)).toBeUndefined();
  });
});
