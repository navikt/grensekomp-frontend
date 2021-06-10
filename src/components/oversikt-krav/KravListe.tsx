import { Column, Row } from 'nav-frontend-grid';
import { Innholdstittel } from 'nav-frontend-typografi';
import React from 'react';

import 'nav-frontend-tabell-style';
import Lenke from 'nav-frontend-lenker';
import formaterIsoTimestampAsNoTime from '../../utils/formatIsoTimestampAsNoTimestamp';
import './KravListe.scss';
import { useTranslation } from 'react-i18next';
import LangKey from '../../language/LangKey';
import lenker, { buildLenke } from '../../config/lenker';
import { Language, Oversettelse, Skillelinje } from '@navikt/helse-arbeidsgiver-felles-frontend';

interface KravListeProps {
  innsendinger: string[];
  onKravClick: any;
}

const KravListe = (props: KravListeProps) => {
  const { t } = useTranslation();
  return (
    <Row className='kravliste'>
      <Column>
        <Innholdstittel className='kravliste-tittel'>{t(LangKey.KRAVLISTE_TITLE)}</Innholdstittel>
        <Oversettelse
          langKey={LangKey.KRAVLISTE_INFO}
          variables={{ path: buildLenke(lenker.Innsending, Language.nb) }}
        />
        <Skillelinje />
        <ul className='kravliste-liste'>
          {props.innsendinger &&
            props.innsendinger.map((item) => (
              <li className='kravliste-krav' key={item}>
                <Lenke href='#' onClick={() => props.onKravClick(item)}>
                  {formaterIsoTimestampAsNoTime(item)} - {t(LangKey.REFUSJONSKRAV)}
                </Lenke>
              </li>
            ))}
        </ul>
      </Column>
    </Row>
  );
};

export default KravListe;
