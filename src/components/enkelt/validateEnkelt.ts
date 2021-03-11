import EnkeltState from './EnkeltState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../validation/pushFeilmelding';
import isValidFnr from '../../utils/isValidFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import isNumericString from '../../utils/isNumericString';

const validateEnkelt = (state: EnkeltState): EnkeltState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  // virksomhetsnummer sjekk

  if (!nextState.fnr) {
    nextState.fnrError = 'Fødselsnummer må fylles ut';
    pushFeilmelding('fnrFeilmeldingId', 'Fødselsnummer må fylles ut', feilmeldinger);
  } else if (!isValidFnr(nextState.fnr)) {
    nextState.fnrError = 'Ugyldig fødselsnummer';
    pushFeilmelding('fnrFeilmeldingId', 'Ugyldig fødselsnummer', feilmeldinger);
  }

  nextState.items?.forEach((item) => {
    item.fomError = !item.fom ? 'Må fylles ut' : undefined;
    item.tomError = !item.tom ? 'Må fylles ut' : undefined;
    item.dagerError = !item.dager ? 'Må fylles ut' : undefined;
    item.beloepError = !item.beloep ? 'Må fylles ut' : undefined;

    item.beloepError = isNumericString(item.beloep) || item.beloepError ? item.beloepError : 'Beløp må være tall';
    item.dagerError = isNumericString(item.dager) || item.dagerError ? item.dagerError : 'Dager må være tall';

    item.fomError = validateFra(item.fom, state.validated);
    item.tomError = validateTil(item.fom, item.tom, state.validated);
  });

  if (!nextState.bekreft) {
    nextState.bekreftError = 'Bekreft at opplysningene er korrekt';
    pushFeilmelding('bekreftFeilmeldingId', 'Bekreft at opplysningene er korrekt', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateEnkelt;
