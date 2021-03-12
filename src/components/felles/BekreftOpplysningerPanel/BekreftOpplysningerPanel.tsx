import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';

interface BekreftOpplysningerPanelProps {
  checked: boolean;
  onChange: () => void;
  feil: string | undefined;
}

const BekreftOpplysningerPanel = (props: BekreftOpplysningerPanelProps) => {
  return (
    <Panel>
      <SkjemaGruppe feilmeldingId='bekreftFeilmeldingId'>
        <BekreftCheckboksPanel
          label='Jeg bekrefter følgende:'
          checked={props.checked}
          feil={props.feil}
          onChange={props.onChange}
        >
          Jeg vet at NAV kan trekke tilbake retten til å få dekket sykepengene i arbeidsgiverperioden hvis opplysningene
          ikke er riktige eller fullstendige
          <div style={{ margin: '2rem' }}>
            <li>Er EØS-borger(e) eller britisk(e) statsborger(e)</li>
            <li>Var i jobb i minst 4 uker før 29. januar</li>
            <li>Er fortsatt ansatt hos meg</li>
            <li>Har ikke tatt arbeid et annet sted</li>
          </div>
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
