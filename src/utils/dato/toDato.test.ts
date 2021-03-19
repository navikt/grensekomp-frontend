import toDato from './toDato';

describe('toDato', () => {
  it('should ', () => {
    expect(toDato(new Date(2020, 5, 5))).toEqual({
      day: 5,
      millis: 1591308000000,
      month: 6,
      value: '05.06.2020',
      year: 2020
    });
  });
});
