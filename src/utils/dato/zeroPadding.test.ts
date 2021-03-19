import zeroPadding from './zeroPadding';

describe('zeroPadding', () => {
  it('should pad', () => {
    expect(zeroPadding(0)).toBe('00');
    expect(zeroPadding(5)).toBe('05');
    expect(zeroPadding(99)).toBe('99');
  });
});
