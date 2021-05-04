import Panel from 'nav-frontend-paneler';
import { Undertittel, Innholdstittel } from 'nav-frontend-typografi';
import React from 'react';
import './SoknadTittel.sass';

interface SoknadTittelProps {
  children: any;
  subtitle?: string;
}

const SoknadTittel = (props: SoknadTittelProps) => (
  <Panel className='panel--heading'>
    <Undertittel>{props.subtitle ? props.subtitle.toUpperCase() : 'SØKNADSSKJEMA'}</Undertittel>
    <Innholdstittel>{props.children}</Innholdstittel>
  </Panel>
);

export default SoknadTittel;
