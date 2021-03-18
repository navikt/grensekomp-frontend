import timezone_mock from 'timezone-mock';
import { toDato } from './toDato';

describe('toDate', () => {
  it('should parse date til dato', () => {
    timezone_mock.register('Europe/London');

    expect(toDato(new Date('2020-06-05 12:00:00'))).toEqual({
      day: 5,
      millis: 1591354800000,
      month: 6,
      value: '05.06.2020',
      year: 2020
    });
  });
});
