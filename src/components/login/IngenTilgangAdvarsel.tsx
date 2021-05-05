import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locales/LangKey';

export const IngenTilgangAdvarsel = () => {
  const { t } = useTranslation();
  return (
    <AlertStripeAdvarsel>
      {t(LangKey.FEILOPPSUMERING)}
      <Link to='/min-side-arbeidsgiver/informasjon-om-tilgangsstyring'>{t(LangKey.ROLLER_OG_TILGANGER)}</Link>
    </AlertStripeAdvarsel>
  );
};
