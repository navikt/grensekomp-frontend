import { Dato } from '../../utils/Dato';

export interface BulkItem {
  uniqueKey?: string;
  fnr?: string;
  fnrError?: string;
  fom?: Dato;
  fomError?: string;
  tom?: Dato;
  tomError?: string;
  dager?: string;
  dagerError?: string;
  beloep?: string;
  beloepError?: string;
}

export default BulkItem;
