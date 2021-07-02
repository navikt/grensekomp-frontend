import { Oversettelse } from '@navikt/helse-arbeidsgiver-felles-frontend';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import React from 'react';
import LangKey from '../../language/LangKey';

export const IngenTilgangAdvarsel = () => {
  return (
    <AlertStripeAdvarsel>
      <Oversettelse langKey={LangKey.INGENTILGANGADVARSEL} />
    </AlertStripeAdvarsel>
  );
};
