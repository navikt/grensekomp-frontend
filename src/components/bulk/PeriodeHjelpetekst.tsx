import Hjelpetekst from 'nav-frontend-hjelpetekst';
import React from 'react';

const PeriodeHjelpetekst = () => (
  <Hjelpetekst style={{ marginLeft: '0.5rem' }}>
    <ul>
      <li>Fra og med første til og med siste fraværsdag i perioden.</li>
      <li>Er fraværet bare på én dag, klikker du samme dag to ganger.</li>
    </ul>
  </Hjelpetekst>
);
export default PeriodeHjelpetekst;
