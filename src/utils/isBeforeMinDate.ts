import dayjs from 'dayjs';
import { Dato } from './dato/Dato';
import { minDate } from '../config/dager';

const isBeforeMinDate = (dagen: Dato): boolean => {
  const currentDate: string =
    dagen.year +
    '-' +
    ((dagen.month ?? 0) < 10 ? '0' : '') +
    dagen.month +
    '-' +
    ((dagen.day ?? 0) < 10 ? '0' : '') +
    dagen.day;
  return dayjs(currentDate).isBefore(minDate);
};

export default isBeforeMinDate;
