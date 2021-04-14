import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Dato from '../../utils/dato/Dato';
import kalkulerRefusjon from './KalkulerRefusjon';

interface BeregnetRefusjonProps {
  inntekt?: string;
  fom?: Dato;
  tom?: Dato;
}

const BeregnetRefusjon = ({ inntekt, fom, tom }: BeregnetRefusjonProps) => {
  const refusjon = kalkulerRefusjon(inntekt, fom, tom);
  return (
    <div>
      <Element>Foreløpig beregnet refusjon</Element>
      <div>
        <Normaltekst className='beregnet-refusjon'>{refusjon}</Normaltekst>
      </div>
    </div>
  );
};

export default BeregnetRefusjon;
