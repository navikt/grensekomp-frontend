import { Dato } from './Dato';
import parseDatoVerify from './parseDatoVerify';

const NORWAY_REGEX = new RegExp('^(\\d{1,2})\\.(\\d{1,2})\\.(\\d{4})$');

export const parseDato = (date: string): Dato => {
  if (!NORWAY_REGEX.test(date)) {
    return {
      value: date,
      error: 'Ugyldig dato formatISO'
    };
  }
  const arr = date.split('.');
  const day = parseInt(arr[0]);
  const month = parseInt(arr[1]);
  const year = parseInt(arr[2]);
  return parseDatoVerify(year, month, day, date);
};
