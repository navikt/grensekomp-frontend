import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';
import Oversettelse from '../felles/Oversettelse/Oversettelse';

export const IngenTilgangAdvarsel = () => {
  const { t } = useTranslation();
  return (
    <AlertStripeAdvarsel>
      <Oversettelse langKey={LangKey.INGENTILGANGADVARSEL} />
    </AlertStripeAdvarsel>
  );
};
