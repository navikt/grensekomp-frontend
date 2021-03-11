import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../validation/pushFeilmelding';
import isValidFnr from '../../utils/isValidFnr';
import { validateFnr } from '../../utils/validateFnr';
import validateTil from '../../validation/validateTil';
import validateFra from '../../validation/validateFra';
import stringishToNumber from '../../utils/stringishToNumber';

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
    item.fomError = !item.fom ? 'Må fylles ut' : undefined;
    item.tomError = !item.tom ? 'Må fylles ut' : undefined;
    item.dagerError = !item.dager ? 'Må fylles ut' : undefined;
    item.beloepError = !item.beloep ? 'Må fylles ut' : undefined;

    // item.beloepError = stringishToNumber(item.beloep) ? undefined : 'Feil';

    item.fnrError = validateFnr(item.fnr, state.validated);
    // item.fomError = validateFra(item.fom, state.validated);
    // item.tomError = validateTil(item.fom, item.tom, state.validated);
  });

  if (!nextState.bekreft) {
    nextState.bekreftError = 'Bekreft at opplysningene er korrekt';
    pushFeilmelding('bekreftFeilmeldingId', 'Bekreft at opplysningene er korrekt', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateBulk;
