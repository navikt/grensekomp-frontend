import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';
import './BekreftOpplysningerPanel.scss';
import { useTranslation } from 'react-i18next';
import Tekstomrade from 'nav-frontend-tekstomrade';
import Key from '../../../locales/Key';
import { LenkeRule } from '../../../utils/tekstomrade/Lenke';

interface BekreftOpplysningerPanelProps {
  checked: boolean;
  onChange: () => void;
  feil?: string;
}

const BekreftOpplysningerPanel = (props: BekreftOpplysningerPanelProps) => {
  const { t } = useTranslation();

  return (
    <Panel className='bekreft-opplysninger-panel'>
      <SkjemaGruppe feilmeldingId='bekreftFeilmeldingId'>
        <BekreftCheckboksPanel
          label={t(Key.BEKREFT_LABEL)}
          checked={props.checked}
          feil={props.feil}
          onChange={props.onChange}
        >
          <p>
            <Tekstomrade rules={[LenkeRule]}>{t(Key.BEKREFT_OPPLYSNINGER)}</Tekstomrade>
          </p>
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
