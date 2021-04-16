import BulkState from './OversiktKravState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../components/felles/Feilmeldingspanel/pushFeilmelding';
import { validateFnr } from '../../validation/validateFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import validateBeloep from '../../validation/validateBeloep';
import validateDager from '../../validation/validateDager';
import { validateOrgnr } from '../../validation/validateOrgnr';
import validateLand from '../../validation/validateLand';

const validateOversiktKrav = (state: BulkState): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  nextState.orgnrError = validateOrgnr(state.orgnr, state.validated);
  if (nextState.orgnrError) {
    pushFeilmelding('orgnr', nextState.orgnrError, feilmeldinger);
  }

  nextState.bekreftError = !state.bekreft ? 'Bekreft at opplysningene er korrekt' : '';
  if (!nextState.bekreft) {
    pushFeilmelding('bekreftFeilmeldingId', 'Bekreft at opplysningene er korrekt', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateOversiktKrav;
