import formatDato from './formatDato';

describe('formatDato', () => {
  it('should format correctly', () => {
    expect(
      formatDato({
        year: 2021,
        month: 4,
        day: 12
      })
    ).toBe('2021-04-12');
  });
});
