import dayjs from 'dayjs';
import MockDate from 'mockdate';
import { maxDate } from './dager';

import timezone_mock from 'timezone-mock';
timezone_mock.register('UTC');

describe('dager', () => {
  it('should return 29.09.2021 when today is greater than 29.09.2021', () => {
    MockDate.set('2021-11-11 12:12:12');

    expect(maxDate()).toEqual(new Date('2021-09-30T22:00:00.000Z'));
  });

  it('should return today when today is less than 01.10.2021', () => {
    MockDate.set('2021-08-09');

    expect(maxDate()).toEqual(dayjs('2021-08-09T00:00:00.000Z').toDate());
  });
});
