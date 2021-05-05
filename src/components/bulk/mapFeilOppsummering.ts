import BulkState from '../../state/bulk/BulkState';
import { pushFeilmelding } from '../felles/Feilmeldingspanel/pushFeilmelding';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import { i18n } from 'i18next';
import LangKey from '../../locale/LangKey';

const mapFeilOppsummering = (state: BulkState, i18n: i18n): FeiloppsummeringFeil[] => {
  const feilmeldinger = new Array<FeiloppsummeringFeil>();
  if (state.orgnrError) {
    pushFeilmelding('orgnr', state.orgnrError, feilmeldinger);
  }

  state.items.forEach((item) => {
    if (item.fnrError) {
      pushFeilmelding(
        'fnr_' + item.uniqueKey,
        i18n.t(LangKey.FEILOPPSUMMERING_ROW, { index: state.items.indexOf(item) + 1, error: item.fnrError }),
        feilmeldinger
      );
    }
    if (item.fomError) {
      pushFeilmelding(
        'fom_' + item.uniqueKey,
        i18n.t(LangKey.FEILOPPSUMMERING_ROW, { index: state.items.indexOf(item) + 1, error: item.fomError }),
        feilmeldinger
      );
    }
    if (item.tomError) {
      pushFeilmelding(
        'tom_' + item.uniqueKey,
        i18n.t(LangKey.FEILOPPSUMMERING_ROW, { index: state.items.indexOf(item) + 1, error: item.tomError }),
        feilmeldinger
      );
    }
    if (item.beloepError) {
      pushFeilmelding(
        'beloep_' + item.uniqueKey,
        i18n.t(LangKey.FEILOPPSUMMERING_ROW, { index: state.items.indexOf(item) + 1, error: item.beloepError }),
        feilmeldinger
      );
    }
    if (item.genericError) {
      pushFeilmelding(
        'ukjent',
        i18n.t(LangKey.FEILOPPSUMMERING_ROW, { index: state.items.indexOf(item) + 1, error: item.genericError }),
        feilmeldinger
      );
    }
  });
  return feilmeldinger;
};

export default mapFeilOppsummering;
