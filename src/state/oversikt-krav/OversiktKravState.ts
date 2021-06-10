import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import OversiktKravItem from './OversiktKravItem';
import { ValidationState } from '@navikt/helse-arbeidsgiver-felles-frontend';

export const defaultOversiktKravState = (state?: OversiktKravState): OversiktKravState => {
  return Object.assign(
    {
      bekreft: false,
      serverError: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || { serverError: false }
  );
};

export default interface OversiktKravState extends ValidationState {
  items?: OversiktKravItem[];
  orgnr?: string;
  orgnrError?: string;
  bekreft?: boolean;
  bekreftError?: string;
  land?: string;
  landError?: string;
  aktivtKrav?: string;
}
