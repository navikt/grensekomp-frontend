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

export interface BulkItems {
  fnr: string;
  fnrError?: string;
  orgnr: string;
  orngrError?: string;
  fom: Dato;
  fomError?: string;
  tom: Dato;
  tomError?: string;
}

export default interface BulkState extends ValidationState {
  items: BulkItems[];
  feilmeldinger: Array<FeiloppsummeringFeil>;
  validated?: boolean;
  progress?: boolean;
  kvittering?: boolean;
  bekreft?: boolean;
  bekreftError?: string;
  error?: boolean;
  login?: boolean;
  submitting?: boolean;
}
