import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel, Normaltekst, Undertittel } from 'nav-frontend-typografi';
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
import diffDato from '../../utils/dato/diffDato';
import { parseISODato } from '../../utils/dato/parseISODato';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

interface KravSammendragProps {
  items: OversiktKravItem[];
  innsending?: string;
  dispatch?: any;
}

const KravSammendrag = (props: KravSammendragProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modifyId, setModifyId] = useState('');
  const { t } = useTranslation();

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
        slettetKrav.periode.beregnetMånedsinntekt && slettetKrav.periode.fom && slettetKrav.periode.tom
          ? beregnetRefusjon(slettetKrav)
          : undefined
      }
    />
  ) : (
    <>
      <ModalWrapper
        isOpen={modalIsOpen}
        onRequestClose={() => handleCloseModal()}
        closeButton={false}
        contentLabel={t(Key.SLETT_KRAV_LABEL)}
        className='slette-modal'
        shouldCloseOnOverlayClick={false}
      >
        <Veilederpanel svg={<SmilendeKar />}>
          <Innholdstittel>{t(Key.SLETT_KRAV_LABEL)}</Innholdstittel>

          <Normaltekst>
            {t(Key.ID_NUMBER)}: ${getIdentityNumber(modifyId)}
          </Normaltekst>
          <Normaltekst>
            {t(Key.BOSTEDLAND)}: ${getCountry(modifyId)}
          </Normaltekst>
          <div className='button-wrapper'>
            <Fareknapp onClick={() => handleSlettKrav(modifyId)}>{t(Key.SLETT_KRAV_CONFIRM)}</Fareknapp>
            <Knapp onClick={handleCloseModal}>{t(Key.CANCEL)}</Knapp>
          </div>
        </Veilederpanel>
      </ModalWrapper>
      <Row>
        <Column>
          <Lenke href='#' onClick={handleTilbake}>
            &lt;&lt; {t(Key.TILBAKE)}
          </Lenke>
        </Column>
      </Row>
      <Row>
        <Column>
          <Undertittel className='krav-mottatt'>
            {t(Key.KRAV_MOTTATT)}: {formaterIsoTimestampAsNoTime(props.innsending)}
          </Undertittel>
          <Innholdstittel className='krav-tittel'>{t(Key.REFUSJONSKRAV)}</Innholdstittel>
          <table className='tabell tabell--stripet'>
            <thead>
              <tr>
                <th role='columnheader'>{t(Key.ID_NUMBER)}</th>
                <th role='columnheader'>{t(Key.BOSTEDLAND)}</th>
                <th role='columnheader'>{t(Key.PERIODE)}</th>
                <th role='columnheader'>{t(Key.BEREGNET_INNTEKT)}</th>
                <th role='columnheader'>{t(Key.BEREGNET_REFUSJON)}</th>
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
                    <td>
                      {item.periode.beregnetMånedsinntekt
                        ? formatNumberAsCurrency(item.periode.beregnetMånedsinntekt)
                        : ''}
                    </td>
                    <td>
                      {item.periode.beregnetMånedsinntekt && item.periode.fom && item.periode.tom
                        ? formatNumberAsCurrency(beregnetRefusjon(item))
                        : ''}
                    </td>
                    <td>
                      <SlettKravKnapp onClick={() => handleRequestSlettInnsending(item.id)} />
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

const beregnetRefusjon = (slettetKrav: OversiktKravItem): number => {
  return estimertRefusjon(
    slettetKrav.periode.beregnetMånedsinntekt,
    diffDato(parseISODato(slettetKrav.periode.fom), parseISODato(slettetKrav.periode.tom))
  );
};
