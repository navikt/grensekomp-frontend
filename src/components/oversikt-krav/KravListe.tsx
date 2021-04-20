import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

import 'nav-frontend-tabell-style';
import Lenke from 'nav-frontend-lenker';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import InternLenke from '../felles/InternLenke/InternLenke';
import lenker from '../../config/lenker';
import Skillelinje from '../felles/Skillelinje';
import './KravListe.scss';

interface KravListeProps {
  innsendinger: string[];
  onKravClick: any;
}

const KravListe = (props: KravListeProps) => {
  return (
    <>
      <Row className='kravliste'>
        <Column>
          <Innholdstittel className='kravliste-tittel'>Oversikt over tidligere innsendte krav</Innholdstittel>
          <Normaltekst>
            Har du tidligere søkt om refusjon for{' '}
            <InternLenke to={lenker.Bulkinnsending}>tapt arbeidsinntekt på grunn av innreiseforbudet</InternLenke>, kan
            du finne tilbake til dem nedenfor.
          </Normaltekst>
          <Skillelinje />
          <ul className='kravliste-liste'>
            {props.innsendinger &&
              props.innsendinger.map((item) => (
                <li className='kravliste-krav' key={item}>
                  <Lenke href='#' onClick={() => props.onKravClick(item)}>
                    {formaterIsoTimestampAsNoTime(item)} - Refusjonskrav ved innreiseforbud
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
