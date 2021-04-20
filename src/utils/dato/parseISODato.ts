import { Dato } from './Dato';
import parseDatoVerify from './parseDatoVerify';

const ISO_REGEX = new RegExp('^(\\d{1,4})\\-(\\d{1,2})\\-(\\d{2})$');

export const parseISODato = (date: string): Dato => {
  if (!ISO_REGEX.test(date)) {
    return {
      value: date,
      error: 'Ugyldig dato format ISO'
    };
  }
  const arr = date.split('-');
  const year = parseInt(arr[0]);
  const month = parseInt(arr[1]);
  const day = parseInt(arr[2]);
  return parseDatoVerify(year, month, day, date);
};
export default parseISODato;
