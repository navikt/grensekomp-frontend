import OversiktKravState from '../../state/oversikt-krav/OversiktKravState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '@navikt/helse-arbeidsgiver-felles-frontend';

const mapFeilOppsummering = (state: OversiktKravState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  if (state.orgnrError) {
    pushFeilmelding('orgnr', state.orgnrError, feilmeldinger);
  }

  return feilmeldinger;
};

export default mapFeilOppsummering;
