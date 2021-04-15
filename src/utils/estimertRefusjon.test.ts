import estimertRefusjon from './estimertRefusjon';

describe('estimertRefusjon', () => {
  it('should return value for estimated refund', () => {
    expect(estimertRefusjon(25000, 10)).toBe(8080);
  });

  it('should return value for estimated refund (below 6G)', () => {
    expect(estimertRefusjon(50000, 10)).toBe(16160);
  });

  it('should return value for estimated refund (above 6G)', () => {
    expect(estimertRefusjon(100000, 10)).toBe(16370);
  });
});
