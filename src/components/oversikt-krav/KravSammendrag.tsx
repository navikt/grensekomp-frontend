import { Column, Row } from 'nav-frontend-grid';
import { Sidetittel } from 'nav-frontend-typografi';
import React from 'react';
import { Actions } from '../../state/oversikt-krav/OversiktKravActions';

import 'nav-frontend-tabell-style';
import formatNumberAsCurrency from '../../utils/formatNumberAsCurrency';
import formatIsoDateAsNoDate from '../../utils/formatIsoDateAsNoDate';
import SlettKravKnapp from '../felles/knapper/SlettKravKnapp';

import mapIsoTilLand from '../../state/oversikt-krav/mapIsoTilLand';
import OversiktKravItem from '../../state/oversikt-krav/OversiktKravItem';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import Lenke from 'nav-frontend-lenker';
import slettRefusjonskrav from '../../api/slettRefusjonskrav/slettRefusjonskrav';

interface KravSammendragProps {
  items?: OversiktKravItem[];
  innsending?: string;
  dispatch?: any;
}

const KravSammendrag = (props: KravSammendragProps) => {
  const handleSlettInnsending = (itemId: string) => {
    slettRefusjonskrav(itemId)
      .then((response) => {
        props.dispatch({ type: Actions.UpdateItem, payload: { response: response } });
      })
      .catch(() => {
        props.dispatch({ type: Actions.HandleResponseError });
      });
  };

  const handleTilbake = () => {
    props.dispatch({ type: Actions.KravUnselected });
  };

  return (
    <>
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
                        ? formatNumberAsCurrency(
                            item.periode.beregnetMånedsinntekt * Number(item.periode.antallDagerMedRefusjon)
                          )
                        : ''}
                    </td>
                    <td>
                      <SlettKravKnapp onClick={() => handleSlettInnsending(item.id)} />
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
