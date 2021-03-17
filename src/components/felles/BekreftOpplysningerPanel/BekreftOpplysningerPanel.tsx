import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import './BekreftOpplysningerPanel.scss';

interface BekreftOpplysningerPanelProps {
  checked: boolean;
  onChange: () => void;
  feil: string | undefined;
}

const BekreftOpplysningerPanel = (props: BekreftOpplysningerPanelProps) => {
  return (
    <Panel className='bekreft-opplysninger-panel'>
      <SkjemaGruppe feilmeldingId='bekreftFeilmeldingId'>
        <BekreftCheckboksPanel
          label='Jeg bekrefter at opplysningene jeg har gitt, er riktige og fullstendige.'
          checked={props.checked}
          feil={props.feil}
          onChange={props.onChange}
        >
          Hver enkelt ansatt jeg søker refusjon for:
          <ul>
            <li>kan ikke møte på jobb på grunn av innreiseforbudet</li>
            <li>er EØS-borger eller britisk statsborger</li>
            <li>var i jobb hos meg i minst 4 uker før 29. januar</li>
          </ul>
          <Normaltekst>
            Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene hvis opplysningene ikke er riktige
            eller fullstendige.
          </Normaltekst>
          <Normaltekst>NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.</Normaltekst>
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
