import dayjs from 'dayjs';
import { Dato } from './Dato';

export const toDate = (dato: Dato | undefined): Date | undefined => {
  if (!dato) {
    return;
  }
  if (!dato.month || !dato.day || !dato.year) {
    return;
  }
  return dayjs(
    dato.year + '-' + (dato.month < 10 ? '0' : '') + dato.month + '-' + (dato.day < 10 ? '0' : '') + dato.day
  ).toDate();
};
