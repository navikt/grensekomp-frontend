import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import BulkItem from './BulkItem';
import { ValidationState } from '@navikt/helse-arbeidsgiver-felles-frontend';

export const MAX_ITEMS = 50;

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
  land?: string;
  landError?: string;
}
