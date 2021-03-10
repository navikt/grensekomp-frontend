import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../../validation/ValidationState';
import { Dato } from '../../utils/Dato';
import mockBulk from '../../mockData/mockBulk';
import BulkItem from './BulkItem';

export const defaultBulkState = (state?: BulkState): BulkState => {
  return Object.assign(
    {
      items: mockBulk,
      bekreft: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || {}
  );
};

export default interface BulkState extends ValidationState {
  items: BulkItem[];
  orgnr?: string;
  orngrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
}
