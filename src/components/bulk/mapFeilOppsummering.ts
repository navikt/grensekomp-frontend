import BulkState from './BulkState';
import { pushFeilmelding } from '../../validation/pushFeilmelding';

const mapFeilOppsummering = (state: BulkState) => {
  state.items.forEach((item) => {
    if (item.fnrError) {
      pushFeilmelding(
        'fnr_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.fnrError,
        state.feilmeldinger
      );
    }
    if (item.fomError) {
      pushFeilmelding(
        'fom_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.fomError,
        state.feilmeldinger
      );
    }
    if (item.tomError) {
      pushFeilmelding(
        'tom_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.tomError,
        state.feilmeldinger
      );
    }
    if (item.dagerError) {
      pushFeilmelding(
        'dager_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.dagerError,
        state.feilmeldinger
      );
    }
    if (item.beloepError) {
      pushFeilmelding(
        'beloep_' + item.uniqueKey,
        'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.beloepError,
        state.feilmeldinger
      );
    }
  });
};

export default mapFeilOppsummering;
