import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../components/felles/Feilmeldingspanel/pushFeilmelding';
import { validateFnr } from '../../validation/validateFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import validateBeloep from '../../validation/validateBeloep';
import { validateOrgnr } from '../../validation/validateOrgnr';
import validateLand from '../../validation/validateLand';

const validateBulk = (state: BulkState): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  nextState.items?.forEach((item, index) => {
    const RAD_FEIL = 'Rad ' + (index + 1) + ': ';

    item.fnrError = validateFnr(item.fnr, state.validated);
    item.fomError = validateFra(item.fom, state.validated);
    item.tomError = validateTil(item.fom, item.tom, state.validated);
    item.beloepError = validateBeloep(item.beloep, 1000000, state.validated);
    item.landError = validateLand(item.land, state.validated);
    item.genericError = undefined;

    if (item.fnrError) {
      pushFeilmelding('fnr_' + item.uniqueKey, RAD_FEIL + item.fnrError, feilmeldinger);
    }
    if (item.landError) {
      pushFeilmelding('land_' + item.uniqueKey, RAD_FEIL + item.landError, feilmeldinger);
    }
    if (item.fomError) {
      pushFeilmelding('fom_' + item.uniqueKey, RAD_FEIL + item.fomError, feilmeldinger);
    }
    if (item.tomError) {
      pushFeilmelding('tom_' + item.uniqueKey, RAD_FEIL + item.tomError, feilmeldinger);
    }
    if (item.beloepError) {
      pushFeilmelding('beloep_' + item.uniqueKey, RAD_FEIL + item.beloepError, feilmeldinger);
    }
  });

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

export default validateBulk;
