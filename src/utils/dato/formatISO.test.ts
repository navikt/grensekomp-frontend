import formatISO from './formatISO';

describe('formatISO', () => {
  it('should formatISO correctly', () => {
    expect(formatISO(19, 3, 2021)).toBe('2021-03-19');
    expect(formatISO(1, 1, 2001)).toBe('2001-01-01');
  });
});
