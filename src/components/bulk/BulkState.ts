import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../../validation/ValidationState';
import BulkItem from './BulkItem';
import { v4 as uuid } from 'uuid';

export const defaultBulkState = (state?: BulkState): BulkState => {
  return Object.assign(
    {
      items: [
        {
          uniqueKey: uuid(),
          fnr: '',
          dager: '',
          beloep: ''
        }
      ],
      bekreft: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || {}
  );
};

export default interface BulkState extends ValidationState {
  items?: BulkItem[];
  orgnr?: string;
  orngrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
}
