import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Row, Column } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

const Kvittering = () => {
  const { t } = useTranslation();
  return (
    <div className='bulk-kvittering'>
      <Row>
        <Column>
          <Panel>
            <Sidetittel>{t(Key.KRAVET_ER_MOTTATT)}</Sidetittel>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Normaltekst>
              {t(Key.KVITTERING_SENDT)}
              <Lenke href='https://www.altinn.no'>Altinn</Lenke>.{t(Key.KONTAKT)}
            </Normaltekst>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <div>
              <Lenke href='https://loginservice.nav.no/slo'>{t(Key.LOGG_UT)}</Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>{t(Key.MIN_SIDE)}</Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default Kvittering;
