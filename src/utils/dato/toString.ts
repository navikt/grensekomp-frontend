import { Dato } from './Dato';

export const toString = (dato: Dato | undefined): string => {
  if (!dato || !dato.year) {
    throw new Error('År ikke oppgitt');
  }
  if (!dato.month) {
    throw new Error('Måned ikke oppgitt');
  }
  if (!dato.day) {
    throw new Error('Dag ikke oppgitt');
  }
  return dato.year + '-' + (dato.month < 10 ? '0' : '') + dato.month + '-' + (dato.day < 10 ? '0' : '') + dato.day;
};
