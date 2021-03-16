import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../validation/pushFeilmelding';
import isValidFnr from '../../utils/isValidFnr';
import { validateFnr } from '../../utils/validateFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import isNumericString from '../../utils/isNumericString';
import hasFnrError from '../../validation/hasFnrError';
import hasFomError from '../../validation/hasFomError';
import hasTomError from '../../validation/hasTomError';
import hasDagerError from '../../validation/hasDagerError';
import hasBeloepError from '../../validation/hasBeloepError';
import validateBeloep from '../../validation/validateBeloep';
import validateDager from '../../validation/validateDager';

const validateBulk = (state: BulkState): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

  // virksomhetsnummer sjekk

  nextState.items?.forEach((item) => {
    if (!item.fnr) {
      item.fnrError = 'Må fylles ut';
    } else {
      if (isValidFnr(item.fnr)) {
        item.fnrError = undefined;
      } else {
        item.fnrError = 'Ugyldig fnr';
      }
    }
    item.fomError = !item.fom ? 'Mangler fra dato' : undefined;
    item.tomError = !item.tom ? 'Mangler til dato' : undefined;
    item.dagerError = !item.dager ? 'Mangler dager' : undefined;
    item.beloepError = !item.beloep ? 'Mangler beløp' : undefined;

    item.beloepError = validateBeloep(item.beloep, 1000000, state.validated || false);

    item.dagerError = validateDager(item.dager, 1000, state.validated || false);

    item.fnrError = validateFnr(item.fnr, state.validated);

    item.fomError = validateFra(item.fom, state.validated);
    item.tomError = validateTil(item.fom, item.tom, state.validated);
  });

  nextState.bekreftError = !state.bekreft ? 'Bekreft at opplysningene er korrekt' : '';
  if (!nextState.bekreft) {
    pushFeilmelding('bekreftFeilmeldingId', 'Bekreft at opplysningene er korrekt', feilmeldinger);
  }

  if (hasFnrError(nextState.items)) {
    pushFeilmelding('fnr', 'Fødselsnummer må fylles ut', feilmeldinger);
  }

  if (hasFomError(nextState.items)) {
    pushFeilmelding('fra', 'Fra dato må fylles ut', feilmeldinger);
  }

  if (hasTomError(nextState.items)) {
    pushFeilmelding('til', 'Til dato må fylles ut', feilmeldinger);
  }

  if (hasDagerError(nextState.items)) {
    pushFeilmelding('dager', 'Antall dager må fylles ut', feilmeldinger);
  }

  if (hasBeloepError(nextState.items)) {
    pushFeilmelding('beloep', 'Beløp må fylles ut', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateBulk;
