import validateLand from './validateLand';

describe('validateLand', () => {
  it('should not allow empty when required', () => {
    expect(validateLand(undefined, true)).not.toBeUndefined();
    expect(validateLand('', true)).not.toBeUndefined();
    expect(validateLand('Velg land:', true)).not.toBeUndefined();
  });

  it('should verify valid when required', () => {
    expect(validateLand('DNK', true)).toBeUndefined();
  });

  it('should verify valid when not required', () => {
    expect(validateLand('bel', false)).toBeUndefined();
  });

  it('should verify valid when required param is not given', () => {
    expect(validateLand('bel')).toBeUndefined();
  });

  it('should allow illegal value when not required', () => {
    expect(validateLand('a', false)).toBeUndefined();
    expect(validateLand('ab', false)).toBeUndefined();
    expect(validateLand('abcd', false)).toBeUndefined();
  });

  it('should accept empty land when not required', () => {
    expect(validateLand(undefined, false)).toBeUndefined();
    expect(validateLand('', false)).toBeUndefined();
  });

  it('should allow not allow illegal value when required', () => {
    expect(validateLand('a', true)).not.toBeUndefined();
    expect(validateLand('ab', true)).not.toBeUndefined();
    expect(validateLand('abcd', true)).not.toBeUndefined();
  });
});
