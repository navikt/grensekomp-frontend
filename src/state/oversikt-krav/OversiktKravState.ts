import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { ValidationState } from '../validation/ValidationState';
import OversiktKravItem from './OversiktKravItem';

export const defaultOversiktKravState = (state?: OversiktKravState): OversiktKravState => {
  return Object.assign(
    {
      bekreft: false,
<<<<<<< HEAD
      serverError: false,
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || { serverError: false }
=======
      feilmeldinger: Array<FeiloppsummeringFeil>()
    },
    state || {}
>>>>>>> 2ca841a (Kravoversikt)
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
  activtKrav?: string;
}
