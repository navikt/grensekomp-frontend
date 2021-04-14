import estimertRefusjon from './estimertRefusjon';

describe('estimertRefusjon', () => {
  it('should return value for estimate refund', () => {
    expect(estimertRefusjon(25000, 10)).toBe(8077);
  });

  it('should return value for estimate refund (below 6G)', () => {
    expect(estimertRefusjon(50000, 10)).toBe(16154);
  });

  it('should return value for estimate refund (above 6G)', () => {
    expect(estimertRefusjon(100000, 10)).toBe(16372);
  });
});
