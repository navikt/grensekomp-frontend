import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../../state/validation/ValidationState';
import BulkItem from './BulkItem';

export const defaultBulkState = (state?: BulkState): BulkState => {
  return Object.assign(
    {
      items: [
        {
          uniqueKey: '1',
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
  items: BulkItem[];
  orgnr?: string;
  orgnrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
}
