import dayjs from 'dayjs';
import { Dato } from './Dato';

const isBeforeMinDate = (dagen: Dato) => {
  const currentDate: string =
    dagen.year +
    '-' +
    ((dagen.month ?? 0) < 10 ? '0' : '') +
    dagen.month +
    '-' +
    ((dagen!!.day ?? 0) < 10 ? '0' : '') +
    dagen.day;
  return dayjs(currentDate).isBefore(dayjs('2021-01-29', 'day'));
};

export default isBeforeMinDate;
