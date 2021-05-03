import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

export const IngenTilgangAdvarsel = () => {
  const { t } = useTranslation();
  return (
    <AlertStripeAdvarsel>
      {t(Key.FEILOPPSUMERING)}
      <Link to='/min-side-arbeidsgiver/informasjon-om-tilgangsstyring'>{t(Key.ROLLER_OG_TILGANGER)}</Link>
    </AlertStripeAdvarsel>
  );
};
