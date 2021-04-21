import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';
import './BekreftOpplysningerPanel.scss';
import Lenke from 'nav-frontend-lenker';

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
          label='Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og
          fullstendige. Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller
          mangelfulle opplysninger, og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.'
          checked={props.checked}
          feil={props.feil}
          onChange={props.onChange}
        >
          <p>
            Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.
            <br />
            Hver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet.
            <br />
            <Lenke target='_blank' href='https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien'>
              Reglene som gjelder for kompensasjon ved innreiseforbudet.
            </Lenke>
          </p>
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
