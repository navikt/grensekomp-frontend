import formatNorsk from './formatNorsk';

describe('formatNorsk', () => {
  it('should format correctly', () => {
    expect(formatNorsk(19, 3, 2021)).toBe('19.03.2021');
    expect(formatNorsk(1, 1, 2001)).toBe('01.01.2001');
  });
});
