import ParseExpiryDate from './ParseExpiryDate';
import timezone_mock from 'timezone-mock';

timezone_mock.register('Europe/London');

describe('ParseExpiryDate', () => {
  it('should return av valid date', () => {
    expect(ParseExpiryDate('2021-02-16T14:53:46.000+00:00')).toEqual(new Date('2021-02-16 14:53:00'));
  });

  it('should return av valid date', () => {
    expect(ParseExpiryDate('2021-04-15T14:26:35.000+00:00')).toEqual(new Date('2021-04-15 14:26:00'));
  });
});
