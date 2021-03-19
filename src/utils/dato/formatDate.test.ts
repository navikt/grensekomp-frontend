import formatDate from './formatDate';

describe('formatDate', () => {
  it('should formatISO correctly', () => {
    expect(formatDate(new Date(2021, 3, 12))).toBe('2021-04-12');
  });
});
