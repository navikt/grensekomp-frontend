import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';
import './BekreftOpplysningerPanel.scss';
import Lenke from 'nav-frontend-lenker';
import { useTranslation } from 'react-i18next';
import Tekstomrade from 'nav-frontend-tekstomrade';
import LanguageKey from '../../../locales/LanguageKey';

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
          label={t(LanguageKey.BEKREFT_LABEL)}
          checked={props.checked}
          feil={props.feil}
          onChange={props.onChange}
        >
          <p>
            <Tekstomrade>{t(LanguageKey.BEKREFT_CONTENT_1)}</Tekstomrade>
            <Lenke target='_blank' href='https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien'>
              {t(LanguageKey.BEKREFT_CONTENT_2)}
            </Lenke>
          </p>
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
