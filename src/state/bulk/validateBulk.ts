import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../components/felles/Feilmeldingspanel/pushFeilmelding';
import { validateFnr } from '../../validation/validateFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import validateBeloep from '../../validation/validateBeloep';
import { validateOrgnr } from '../../validation/validateOrgnr';
import validateLand from '../../validation/validateLand';
import { i18n } from 'i18next';
import formatValidation from '../../validation/formatValidation';
import validateBekreft from '../../validation/validateBekreft';

const validateBulk = (state: BulkState, i18n: i18n): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  nextState.items?.forEach((item, index) => {
    const RAD_FEIL = 'Rad ' + (index + 1) + ': ';

    item.fnrError = formatValidation(validateFnr(item.fnr, state.validated), i18n);
    item.fomError = formatValidation(validateFra(item.fom, state.validated), i18n);
    item.tomError = formatValidation(validateTil(item.fom, item.tom, state.validated), i18n);
    item.beloepError = formatValidation(validateBeloep(item.beloep, 1000000, state.validated), i18n);
    item.landError = formatValidation(validateLand(item.land, state.validated), i18n);
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

  nextState.orgnrError = formatValidation(validateOrgnr(state.orgnr, state.validated), i18n);
  if (nextState.orgnrError) {
    pushFeilmelding('orgnr', nextState.orgnrError, feilmeldinger);
  }

  nextState.bekreftError = formatValidation(validateBekreft(state.bekreft, state.validated), i18n);
  if (nextState.bekreftError) {
    pushFeilmelding('bekreftFeilmeldingId', nextState.bekreftError || '', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateBulk;
