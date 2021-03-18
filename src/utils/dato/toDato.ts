import dayjs from 'dayjs';
import { Dato } from './Dato';

export const toDato = (date: Date): Dato => {
  return {
    value: dayjs(date).format('DD.MM.YYYY'),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    millis: date.getTime()
  };
};
