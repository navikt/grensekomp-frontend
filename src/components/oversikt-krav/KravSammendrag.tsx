import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel, Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import React, { useState } from 'react';
import { Actions } from '../../state/oversikt-krav/OversiktKravActions';

import 'nav-frontend-tabell-style';
import formatNumberAsCurrency from '../../utils/formatNumberAsCurrency';
import formatIsoDateAsNoDate from '../../utils/formatIsoDateAsNoDate';
import SlettKravKnapp from '../felles/knapper/SlettKravKnapp';

import mapIsoTilLand from '../../state/oversikt-krav/mapIsoTilLand';
import OversiktKravItem from '../../state/oversikt-krav/OversiktKravItem';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import Lenke from 'nav-frontend-lenker';
import slettKrav from '../../api/slettRefusjonskrav/slettKrav';
import ModalWrapper from 'nav-frontend-modal';
import { Fareknapp, Knapp } from 'nav-frontend-knapper';
import SmilendeKar from './SmilendeKar';
import Veilederpanel from 'nav-frontend-veilederpanel';
import './KravSammendrag.scss';
import SlettetKravKvittering from '../slettetKravKvittering';
import estimertRefusjon from '../../utils/estimertRefusjon';

interface KravSammendragProps {
  items: OversiktKravItem[];
  innsending?: string;
  dispatch?: any;
}

const KravSammendrag = (props: KravSammendragProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modifyId, setModifyId] = useState('');

  const [slettetKrav, setSlettetKrav] = useState<OversiktKravItem | undefined>(undefined);
  const handleSlettKrav = (itemId: string) => {
    setModalIsOpen(false);
    slettKrav(itemId)
      .then((response) => {
        setSlettetKrav(props.items.find((item) => item.id === itemId));
        props.dispatch({ type: Actions.SlettItem, payload: { response: response } });
      })
      .catch(() => {
        props.dispatch({ type: Actions.HandleResponseError });
      });
  };

  const handleTilbake = () => {
    props.dispatch({ type: Actions.KravUnselected });
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleRequestSlettInnsending = (itemId: string) => {
    setModifyId(itemId);
    setModalIsOpen(true);
  };
  const getIdentityNumber = (itemId: string) => {
    let items: OversiktKravItem[];
    if (!props.items) {
      return '';
    }
    items = props.items;

    const currentItem: OversiktKravItem | undefined = items.find((item) => item.id === itemId);
    return currentItem ? currentItem.identitetsnummer : '';
  };

  const getCountry = (itemId: string) => {
    let items: OversiktKravItem[];
    if (!props.items) {
      return '';
    }
    items = props.items;

    const currentItem: OversiktKravItem | undefined = items.find((item) => item.id === itemId);
    return currentItem ? mapIsoTilLand(currentItem.bostedland) : '';
  };

  return slettetKrav ? (
    <SlettetKravKvittering
      identitetsnummer={slettetKrav.identitetsnummer}
      land={slettetKrav.bostedland}
      fom={slettetKrav.periode.fom}
      tom={slettetKrav.periode.tom}
      beloep={slettetKrav.periode.beregnetMånedsinntekt}
      refusjon={
        slettetKrav.periode.beregnetMånedsinntekt && slettetKrav.periode.antallDagerMedRefusjon
          ? estimertRefusjon(slettetKrav.periode.beregnetMånedsinntekt, slettetKrav.periode.antallDagerMedRefusjon)
          : undefined
      }
    />
  ) : (
    <>
      <ModalWrapper
        isOpen={modalIsOpen}
        onRequestClose={() => handleCloseModal()}
        closeButton={false}
        contentLabel='Er du sikker på at du vil slette kravet?'
        className='slette-modal'
        shouldCloseOnOverlayClick={false}
      >
        <Veilederpanel svg={<SmilendeKar />}>
          <Innholdstittel>Er du sikker på at du vil slette kravet?</Innholdstittel>

          <Normaltekst>Fødselsnummer/D-nummer: {getIdentityNumber(modifyId)}</Normaltekst>
          <Normaltekst>Bostedsland: {getCountry(modifyId)}</Normaltekst>
          <div className='button-wrapper'>
            <Fareknapp onClick={() => handleSlettInnsending(modifyId)}>Ja - slett kravet</Fareknapp>
            <Knapp onClick={handleCloseModal}>Avbryt</Knapp>
          </div>
        </Veilederpanel>
      </ModalWrapper>
      <Row>
        <Column>
          <Lenke href='#' onClick={handleTilbake}>
            &lt;&lt; Tilbake til liste
          </Lenke>
        </Column>
      </Row>
      <Row>
        <Column>
          <Sidetittel>{formaterIsoTimestampAsNoTime(props.innsending)} - Koronarelaterte egenmeldinger</Sidetittel>
          <table className='tabell tabell--stripet'>
            <thead>
              <tr>
                <th role='columnheader'>Fødsels-/D-nummer</th>
                <th role='columnheader'>Bostedsland</th>
                <th role='columnheader'>Periode</th>
                <th role='columnheader'>Antall dager</th>
                <th role='columnheader'>Dagsats</th>
                <th role='columnheader'>Foreløpig beregnet refusjon</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.items &&
                props.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.identitetsnummer}</td>
                    <td>{mapIsoTilLand(item.bostedland)}</td>
                    <td>
                      {formatIsoDateAsNoDate(item.periode.fom)} - {formatIsoDateAsNoDate(item.periode.tom)}
                    </td>
                    <td>{item.periode.antallDagerMedRefusjon ?? ''}</td>
                    <td>
                      {item.periode.beregnetMånedsinntekt
                        ? formatNumberAsCurrency(item.periode.beregnetMånedsinntekt)
                        : ''}
                    </td>
                    <td>
                      {item.periode.beregnetMånedsinntekt && item.periode.antallDagerMedRefusjon
                        ? estimertRefusjon(item.periode.beregnetMånedsinntekt, item.periode.antallDagerMedRefusjon)
                        : ''}
                    </td>
                    <td>
                      <SlettKravKnapp onClick={() => handleSlettKrav(item.id)} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Column>
      </Row>
    </>
  );
};

export default KravSammendrag;
