import { Dato } from '../../utils/Dato';

export interface EnkeltItem {
  uniqueKey?: string;
  fom?: Dato;
  fomError?: string;
  tom?: Dato;
  tomError?: string;
  dager?: string;
  dagerError?: string;
  beloep?: string;
  beloepError?: string;
}

export default EnkeltItem;
