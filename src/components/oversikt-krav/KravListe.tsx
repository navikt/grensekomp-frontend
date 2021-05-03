import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel } from 'nav-frontend-typografi';
import React from 'react';

import 'nav-frontend-tabell-style';
import Lenke from 'nav-frontend-lenker';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import Skillelinje from '../felles/Skillelinje';
import './KravListe.scss';
import { useTranslation } from 'react-i18next';
import Oversettelse from '../../locales/Oversettelse';
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
        <Oversettelse langKey={Key.KRAVLISTE_INFO} />
        <Skillelinje />
        <ul className='kravliste-liste'>
          {props.innsendinger &&
            props.innsendinger.map((item) => (
              <li className='kravliste-krav' key={item}>
                <Lenke href='#' onClick={() => props.onKravClick(item)}>
                  {formaterIsoTimestampAsNoTime(item)} - {t(Key.REFUSJONSKRAV)}
                </Lenke>
              </li>
            ))}
        </ul>
      </Column>
    </Row>
  );
};

export default KravListe;
