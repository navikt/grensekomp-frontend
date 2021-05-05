import React from 'react';
import Side from '../felles/Side';
import Alertstripe from 'nav-frontend-alertstriper';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';

export const TilgangsfeilSide = () => {
  const { t } = useTranslation();
  return (
    <Side
      className='tilgangsfeil-side'
      sidetittel={t(LangKey.TILGANGSFEILSIDE)}
      subtitle={t(LangKey.ERROR_GENERIC)}
      bedriftsmeny={false}
    >
      <Alertstripe type='feil'>{t(LangKey.ERROR_LOGIN)}</Alertstripe>
    </Side>
  );
};
