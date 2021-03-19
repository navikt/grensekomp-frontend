import { Dato } from './Dato';
import zeroPadding from './zeroPadding';

export const toDato = (date: Date): Dato => {
  return {
    value: `${zeroPadding(date.getDate())}.${zeroPadding(date.getMonth() + 1)}.${zeroPadding(date.getFullYear())}`, //dd.mm.yyyy
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    millis: date.getTime()
  };
};

export default toDato;
