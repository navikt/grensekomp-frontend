import BulkState from './BulkState';
import { pushFeilmelding } from '../../validation/pushFeilmelding';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';

const mapFeilOppsummering = (state: BulkState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  state.items.forEach((item) => {
    if (item.fnrError) {
      pushFeilmelding(
        'fnr_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.fnrError,
        feilmeldinger
      );
    }
    if (item.fomError) {
      pushFeilmelding(
        'fom_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.fomError,
        feilmeldinger
      );
    }
    if (item.tomError) {
      pushFeilmelding(
        'tom_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.tomError,
        feilmeldinger
      );
    }
    if (item.dagerError) {
      pushFeilmelding(
        'dager_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.dagerError,
        feilmeldinger
      );
    }
    if (item.beloepError) {
      pushFeilmelding(
        'beloep_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.beloepError,
        feilmeldinger
      );
    }
  });
  return feilmeldinger;
};

export default mapFeilOppsummering;
