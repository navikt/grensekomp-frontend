import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';

interface BeregnetRefusjonProps {
  inntekt?: string;
}

const BeregnetRefusjon = (props: BeregnetRefusjonProps) => {
  return (
    <div>
      <Element>Foreløpig beregnet refusjon</Element>
      <div>
        <Normaltekst className='beregnet-refusjon'>0</Normaltekst>
      </div>
    </div>
  );
};

export default BeregnetRefusjon;
