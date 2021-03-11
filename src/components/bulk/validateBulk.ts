import BulkState from './BulkState';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { pushFeilmelding } from '../../validation/pushFeilmelding';
import isValidFnr from '../../utils/isValidFnr';

const validateBulk = (state: BulkState): BulkState => {
  if (!state.validated) {
    return state;
  }
  const nextState = Object.assign({}, state);
  const feilmeldinger = new Array<FeiloppsummeringFeil>();

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
  });

  if (!nextState.bekreft) {
    nextState.bekreftError = 'Bekreft at opplysningene er korrekt';
    pushFeilmelding('bekreftFeilmeldingId', 'Bekreft at opplysningene er korrekt', feilmeldinger);
  }

  nextState.feilmeldinger = feilmeldinger;
  return nextState;
};

export default validateBulk;
