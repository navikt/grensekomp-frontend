import React from 'react';
import Side from '../felles/Side';
import Alertstripe from 'nav-frontend-alertstriper';

export const TilgangsfeilSide = () => {
  return (
    <Side className='tilgangsfeil-side' sidetittel='Søknadsskjema' subtitle='Det oppstod en feil' bedriftsmeny={false}>
      <Alertstripe type='feil'>Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.</Alertstripe>
    </Side>
  );
};
