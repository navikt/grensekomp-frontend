import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Row, Column } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locales/LangKey';
import Oversettelse from '../../locales/Oversettelse';

const Kvittering = () => {
  const { t } = useTranslation();
  return (
    <div className='bulk-kvittering'>
      <Row>
        <Column>
          <Panel>
            <Sidetittel>{t(LangKey.KRAVET_ER_MOTTATT)}</Sidetittel>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Normaltekst>
              <Oversettelse langKey={LangKey.KVITTERING_INFO} />
            </Normaltekst>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <div>
              <Lenke href='https://loginservice.nav.no/slo'>{t(LangKey.LOGG_UT)}</Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>{t(LangKey.MIN_SIDE)}</Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default Kvittering;
