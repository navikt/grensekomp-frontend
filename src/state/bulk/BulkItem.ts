import { Dato } from '../../utils/dato/Dato';

export interface BulkItem {
  uniqueKey?: string;
  fnr?: string;
  fnrError?: string;
  fom?: Dato;
  fomError?: string;
  tom?: Dato;
  tomError?: string;
  beloep?: string;
  beloepError?: string;
  land?: string;
  landError?: string;
  genericError?: string;
  accepted?: boolean;
}

export default BulkItem;
