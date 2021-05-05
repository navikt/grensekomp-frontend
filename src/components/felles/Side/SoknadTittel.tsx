import Panel from 'nav-frontend-paneler';
import { Undertittel, Innholdstittel } from 'nav-frontend-typografi';
import React from 'react';
import './SoknadTittel.sass';
import { useTranslation } from 'react-i18next';
import Key from '../../../locales/Key';

interface SoknadTittelProps {
  children: any;
  subtitle?: string;
}

const SoknadTittel = (props: SoknadTittelProps) => {
  const { t } = useTranslation();
  return (
    <Panel className='panel--heading'>
      <Undertittel>{props.subtitle ? props.subtitle.toUpperCase() : t(Key.SOEKNADSSKJEMA)}</Undertittel>
      <Innholdstittel>{props.children}</Innholdstittel>
    </Panel>
  );
};

export default SoknadTittel;
