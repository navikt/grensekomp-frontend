import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import React from 'react';
import LangKey from '../../locale/LangKey';
import Oversettelse from '../felles/Oversettelse/Oversettelse';

export const IngenTilgangAdvarsel = () => {
  return (
    <AlertStripeAdvarsel>
      <Oversettelse langKey={LangKey.INGENTILGANGADVARSEL} />
    </AlertStripeAdvarsel>
  );
};
