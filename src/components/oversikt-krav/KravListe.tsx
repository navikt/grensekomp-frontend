import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

import 'nav-frontend-tabell-style';
import Lenke from 'nav-frontend-lenker';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import InternLenke from '../felles/InternLenke/InternLenke';
import lenker from '../../config/lenker';

interface KravListeProps {
  innsendinger: string[];
  onKravClick: any;
}

const KravListe = (props: KravListeProps) => {
  return (
    <>
      <Row>
        <Column>
          <Innholdstittel>Oversikt over tidligere innsendte krav</Innholdstittel>
          <br />
          <br />
          <Normaltekst>
            Har du tidligere søkt om refusjon for{' '}
            <InternLenke to={lenker.Bulkinnsending}>tapt arbeidsinntekt på grunn av innreiseforbudet</InternLenke>, kan
            du finne tilbake til dem nedenfor.
          </Normaltekst>
          <br />
          <hr></hr>
          {props.innsendinger &&
            props.innsendinger.map((item) => (
              <div key={item}>
                <br />
                <Lenke href='#' onClick={() => props.onKravClick(item)}>
                  {formaterIsoTimestampAsNoTime(item)} - Refusjonskrav ved innreiseforbud
                </Lenke>
              </div>
            ))}
        </Column>
      </Row>
    </>
  );
};

export default KravListe;
