import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

const Kvittering = () => (
  <Panel className='bulk-kvittering'>
    <Panel>
      <Sidetittel>Kravet er mottatt</Sidetittel>
    </Panel>

    <Panel>
      <Normaltekst>
        En kvittering er sendt til meldingsboksen deres i <Lenke href='https://www.altinn.no'>Altinn</Lenke>. Den
        ansatte det gjelder er også varslet om søknaden. Trenger du å kontakte oss, er det tilstrekkelig å oppgi
        fødselsnummeret til den ansatte.
      </Normaltekst>
    </Panel>

    <Panel>
      <div>
        <Lenke href='https://loginservice.nav.no/slo'>Logg ut</Lenke>
      </div>
      <div>
        <Lenke href='/min-side-arbeidsgiver/'>Min side arbeidsgiver</Lenke>
      </div>
    </Panel>
  </Panel>
);

export default Kvittering;
