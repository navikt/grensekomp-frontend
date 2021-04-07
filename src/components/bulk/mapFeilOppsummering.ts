import BulkState from '../../state/bulk/BulkState';
import { pushFeilmelding } from '../felles/Feilmeldingspanel/pushFeilmelding';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';

const mapFeilOppsummering = (state: BulkState): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  if (state.orgnrError) {
    pushFeilmelding('orgnr', state.orgnrError, feilmeldinger);
  }
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
    if (item.genericError) {
      pushFeilmelding('ukjent', 'Rad ' + (state.items.indexOf(item) + 1) + ': ' + item.genericError, feilmeldinger);
    }
  });
  return feilmeldinger;
};

export default mapFeilOppsummering;
