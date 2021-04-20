import { Dato } from './Dato';

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
  const v = new Date(year, month - 1, day);
  if (v.getDate() != day) {
    return {
      value: date,
      error: 'Ugyldig dato'
    };
  }
  if (v.getMonth() != month - 1) {
    return {
      value: date,
      error: 'Ugyldig måned'
    };
  }
  if (v.getFullYear() != year) {
    return {
      value: date,
      error: 'Ugyldig år'
    };
  }
  return {
    value: date,
    day,
    month,
    year,
    millis: v.getTime()
  };
};
export default parseISODato;
