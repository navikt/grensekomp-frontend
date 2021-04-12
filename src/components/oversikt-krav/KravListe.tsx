import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import React from 'react';

import 'nav-frontend-tabell-style';
import Lenke from 'nav-frontend-lenker';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';

interface KravListeProps {
  innsendinger: string[];
  onKravClick: any;
}

const KravListe = (props: KravListeProps) => {
  return (
    <>
      <Row>
        <Column>
          <Sidetittel>Oversikt over tidligere innsendte krav</Sidetittel>
          <Normaltekst>
            Har du tidligere søkt om refusjon av sykepenger for fravær som skyldes korona eller tapt arbeidsinntekt på
            grunn av innreiseforbudet, kan du finne tilbake til dem nedenfor.
          </Normaltekst>
          <hr></hr>
          <ul>
            {props.innsendinger &&
              props.innsendinger.map((item) => (
                <li key={item}>
                  <Lenke href='#' onClick={() => props.onKravClick(item)}>
                    {formaterIsoTimestampAsNoTime(item)}
                  </Lenke>
                </li>
              ))}
          </ul>
        </Column>
      </Row>
    </>
  );
};

export default KravListe;
