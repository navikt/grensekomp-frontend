import { Dato } from './Dato';
import formatDato from './formatDato';

export const datoToString = (dato: Dato | undefined): string => {
  if (!dato || !dato.year) {
    throw new Error('År ikke oppgitt');
  }
  if (!dato.month) {
    throw new Error('Måned ikke oppgitt');
  }
  if (!dato.day) {
    throw new Error('Dag ikke oppgitt');
  }
  return formatDato(dato);
};

export default datoToString;
