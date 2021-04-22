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

  it('should format correctly with undefined year', () => {
    expect(
      formatDato({
        year: undefined,
        month: 4,
        day: 12
      })
    ).toBe('00-04-12');
  });

  it('should format correctly with undefined month', () => {
    expect(
      formatDato({
        year: 2002,
        month: undefined,
        day: 12
      })
    ).toBe('2002-00-12');
  });

  it('should format correctly with undefined day', () => {
    expect(
      formatDato({
        year: 2002,
        month: 4,
        day: undefined
      })
    ).toBe('2002-04-00');
  });

  it('should format correctly with undefined params', () => {
    expect(
      formatDato({
        year: undefined,
        month: undefined,
        day: undefined
      })
    ).toBe('00-00-00');
  });
});
