import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import validateLand from '../../validation/validateLand';
import { i18n } from 'i18next';
import {
  validateFra,
  validateTil,
  validateOrgnr,
  validateFnr,
  formatValidation,
  pushFeilmelding,
  validateBekreft,
  validateBeloep
} from '@navikt/helse-arbeidsgiver-felles-frontend';
import { minDate } from '../../config/dager';

const validateBulk = (state: BulkState, Translate: i18n): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  nextState.items?.forEach((item, index) => {
    const RAD_FEIL = 'Rad ' + (index + 1) + ': ';

    item.fnrError = formatValidation(validateFnr(item.fnr, state.validated), Translate);
    item.fomError = formatValidation(validateFra(item.fom, minDate, state.validated), Translate);
    item.tomError = formatValidation(validateTil(item.fom, item.tom, minDate, state.validated), Translate);
    item.beloepError = formatValidation(validateBeloep(item.beloep, 1000000, state.validated), Translate);
    item.landError = formatValidation(validateLand(item.land, state.validated), Translate);
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

  nextState.orgnrError = formatValidation(validateOrgnr(state.orgnr, state.validated), Translate);
  if (nextState.orgnrError) {
    pushFeilmelding('orgnr', nextState.orgnrError, feilmeldinger);
  }

  nextState.bekreftError = formatValidation(validateBekreft(state.bekreft, state.validated), Translate);
  if (nextState.bekreftError) {
    pushFeilmelding('bekreftFeilmeldingId', nextState.bekreftError || '', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateBulk;
