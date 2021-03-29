import validateLand from './validateLand';

describe('validateLand', () => {
  it('should not allow empty when required', () => {
    expect(validateLand(undefined, true)).not.toBeUndefined();
    expect(validateLand('', true)).not.toBeUndefined();
  });

  it('should verify valid when required', () => {
    expect(validateLand('us', true)).toBeUndefined();
  });

  it('should verify valid when not required', () => {
    expect(validateLand('us', false)).toBeUndefined();
  });

  it('should accept empty land when not required', () => {
    expect(validateLand(undefined, false)).toBeUndefined();
    expect(validateLand('', false)).toBeUndefined();
  });
});
