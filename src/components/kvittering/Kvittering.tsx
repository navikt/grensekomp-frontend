import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Side from '../felles/Side';
import { Row, Column } from 'nav-frontend-grid';

const Kvittering = () => (
  <Side
    bedriftsmeny={false}
    className='bulk-kvittering'
    sidetittel='Refusjonssøknad for grensearbeidere'
    subtitle='Bulkinnsending'
  >
    <Row>
      <Column>
        <Panel>
          <Sidetittel>Kravet er mottatt</Sidetittel>
        </Panel>
      </Column>
    </Row>

    <Row>
      <Column>
        <Panel>
          <Normaltekst>
            En kvittering er sendt til meldingsboksen deres i <Lenke href='https://www.altinn.no'>Altinn</Lenke>. Den
            ansatte det gjelder er også varslet om søknaden. Trenger du å kontakte oss, er det tilstrekkelig å oppgi
            fødselsnummeret til den ansatte.
          </Normaltekst>
        </Panel>
      </Column>
    </Row>

    <Row>
      <Column>
        <Panel>
          <div>
            <Lenke href='https://loginservice.nav.no/slo'>Logg ut</Lenke>
          </div>
          <div>
            <Lenke href='/min-side-arbeidsgiver/'>Min side arbeidsgiver</Lenke>
          </div>
        </Panel>
      </Column>
    </Row>
  </Side>
);

export default Kvittering;
