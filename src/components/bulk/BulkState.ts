import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../../validation/ValidationState';
import { Dato } from '../../utils/Dato';

export const defaultBulkState = (state?: BulkState): BulkState => {
  return Object.assign(
    {
      items: [],
      bekreft: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || {}
  );
};

interface BulkItems {
  uniqueKey?: string;
  fnr?: string;
  fnrError?: string;
  fom?: Dato;
  fomError?: string;
  tom?: Dato;
  tomError?: string;
  dager?: number;
  dagerError?: string;
  beloep?: number;
  beloepError?: string;
}

export default interface BulkState extends ValidationState {
  items: BulkItems[];
  orgnr?: string;
  orngrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
}
