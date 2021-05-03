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
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

interface KravListeProps {
  innsendinger: string[];
  onKravClick: any;
}

const KravListe = (props: KravListeProps) => {
  const { t } = useTranslation();
  return (
    <Row className='kravliste'>
      <Column>
        <Innholdstittel className='kravliste-tittel'>Oversikt over tidligere innsendte krav</Innholdstittel>
        <Normaltekst>
          {t(Key.TIDLIGERE_SØKT)}
          <InternLenke to={lenker.Bulkinnsending}>{t(Key.TABT_ARBEIDSINNTEKT)}</InternLenke>
          {t(Key.FINN_NEDENFOR)}
        </Normaltekst>
        <Skillelinje />
        <ul className='kravliste-liste'>
          {props.innsendinger &&
            props.innsendinger.map((item) => (
              <li className='kravliste-krav' key={item}>
                <Lenke href='#' onClick={() => props.onKravClick(item)}>
                  `${formaterIsoTimestampAsNoTime(item)} - ${t(Key.REFUSJONSKRAV)}`
                </Lenke>
              </li>
            ))}
        </ul>
      </Column>
    </Row>
  );
};

export default KravListe;
