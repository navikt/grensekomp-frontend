import React, { useEffect, useReducer } from 'react';
import { Actions } from '../../state/oversikt-krav/OversiktKravActions';
import OversiktKravReducer from '../../state/oversikt-krav/OversiktKravReducer';
import OversiktKravState, { defaultOversiktKravState } from '../../state/oversikt-krav/OversiktKravState';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Side from '../felles/Side';
import 'nav-frontend-tabell-style';
import refusjonskravList from '../../api/refusjonskravList/refusjonskravList';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import unikeInnsendinger from '../../state/oversikt-krav/unikeInnsendinger';
import KravListe from './KravListe';
import KravSammendrag from './KravSammendrag';
import { RefusjonskravStatus } from '../../state/oversikt-krav/OversiktKravItem';
import { useTranslation } from 'react-i18next';
import LangKey from '../../language/LangKey';

interface OversiktKravProps {
  state?: OversiktKravState;
}

const OversiktKrav = (props: OversiktKravProps) => {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(OversiktKravReducer, props.state, defaultOversiktKravState);
  const { arbeidsgiverId } = useArbeidsgiver();

  const handleCloseServerFeil = () => {
    dispatch({ type: Actions.HideServerError });
  };

  useEffect(() => {
    if (arbeidsgiverId) {
      refusjonskravList(arbeidsgiverId)
        .then((response) => {
          dispatch({ type: Actions.HandleResponse, payload: { response: response } });
        })
        .catch(() => {
          dispatch({ type: Actions.HandleResponseError });
        });
    }
  }, [arbeidsgiverId]);

  const innsendinger = unikeInnsendinger(state.items ?? []);

  const onKravClickHandler = (item) => {
    dispatch({ type: Actions.KravSelected, payload: { krav: item } });
  };

  const kravListe = state.items
    ? state.items.filter(
        (kravItem) => kravItem.opprettet === state.aktivtKrav && kravItem.status !== RefusjonskravStatus.SLETTET
      )
    : [];

  return (
    <Side
      bedriftsmeny={true}
      className={`oversikt-krav${state.aktivtKrav ? ' aktive-krav' : ''}`}
      sidetittel={t(LangKey.OVERSIKTKRAV_TITLE)}
      subtitle={t(LangKey.OVERSIKTKRAV_SUBTITLE)}
    >
      <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
      {!state.aktivtKrav && <KravListe innsendinger={innsendinger} onKravClick={onKravClickHandler} />}
      {state.aktivtKrav && <KravSammendrag items={kravListe} innsending={state.aktivtKrav} dispatch={dispatch} />}
    </Side>
  );
};

export default OversiktKrav;
