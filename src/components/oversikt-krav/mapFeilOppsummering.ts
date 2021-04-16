import OversiktKravState from '../../state/oversikt-krav/OversiktKravState';
import { pushFeilmelding } from '../felles/Feilmeldingspanel/pushFeilmelding';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';

const mapFeilOppsummering = (state: OversiktKravState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  if (state.orgnrError) {
    pushFeilmelding('orgnr', state.orgnrError, feilmeldinger);
  }

  return feilmeldinger;
};

export default mapFeilOppsummering;
