import { Dato } from './Dato';
import formatISO from './formatISO';
import zeroPadding from './zeroPadding';

const formatDato = (dato: Dato) =>
  `${zeroPadding(dato.year || 0)}-${zeroPadding(dato.month || 0)}-${zeroPadding(dato.day || 0)}`;

export default formatDato;
