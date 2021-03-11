import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../../validation/ValidationState';
import EnkeltItem from './EnkeltItem';
import mockEnkelt from '../../mockData/mockEnkelt';

export const defaultEnkeltState = (state?: EnkeltState): EnkeltState => {
  return Object.assign(
    {
      items: mockEnkelt,
      bekreft: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || {}
  );
};

export default interface EnkeltState extends ValidationState {
  items?: EnkeltItem[];
  fnr?: string;
  fnrError?: string;
  orgnr?: string;
  orngrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
}
