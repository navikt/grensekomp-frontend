import React from 'react';
import Side from '../felles/Side';
import Alertstripe from 'nav-frontend-alertstriper';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

export const TilgangsfeilSide = () => {
  const { t } = useTranslation();
  return (
    <Side className='tilgangsfeil-side' sidetittel='Søknadsskjema' subtitle={t(Key.ERROR_GENERIC)} bedriftsmeny={false}>
      <Alertstripe type='feil'>{t(Key.ERROR_LOGIN)}</Alertstripe>
    </Side>
  );
};
