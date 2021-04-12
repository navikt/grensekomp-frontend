import React, { useEffect, useReducer } from 'react';
import { Actions } from '../../state/oversikt-krav/OversiktKravActions';
import OversiktKravReducer from '../../state/oversikt-krav/OversiktKravReducer';
import OversiktKravState, { defaultOversiktKravState } from '../../state/oversikt-krav/OversiktKravState';
import ServerFeilAdvarsel from '../felles/ServerFeilAdvarsel';
import Side from '../felles/Side';

import 'nav-frontend-tabell-style';
import refusjonskravList from '../../api/refusjonskaravList/refusjonskravList';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import unikeInnsendinger from '../../state/oversikt-krav/unikeInnsendinger';
import KravListe from './KravListe';
import KravSammendrag from './KravSammendrag';
import { RefusjonskravStatus } from '../../state/oversikt-krav/OversiktKravItem';

interface OversiktKravProps {
  state?: OversiktKravState;
}

const OversiktKrav = (props: OversiktKravProps) => {
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
        (kravItem) => kravItem.opprettet === state.activtKrav && kravItem.status !== RefusjonskravStatus.SLETTET
      )
    : [];

  return (
    <Side
      bedriftsmeny={true}
      className='oversikt-krav'
      sidetittel='Refusjon for lønn ved innreiseforbud'
      subtitle='Refusjoner'
    >
      <ServerFeilAdvarsel isOpen={state.serverError} onClose={handleCloseServerFeil} />
      {!state.activtKrav && <KravListe innsendinger={innsendinger} onKravClick={onKravClickHandler} />}
      {state.activtKrav && <KravSammendrag items={kravListe} innsending={state.activtKrav} dispatch={dispatch} />}
    </Side>
  );
};

export default OversiktKrav;