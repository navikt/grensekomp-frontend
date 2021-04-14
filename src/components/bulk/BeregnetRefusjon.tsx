import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Dato from '../../utils/dato/Dato';
import kalkulerRefusjon from './KalkulerRefusjon';
import formatNumberAsCurrency from '../../utils/formatNumberAsCurrency';

interface BeregnetRefusjonProps {
  inntekt?: string;
  fom?: Dato;
  tom?: Dato;
}

const BeregnetRefusjon = ({ inntekt, fom, tom }: BeregnetRefusjonProps) => {
  const refusjon = kalkulerRefusjon(inntekt, fom, tom);
  return (
    <div>
      <Element className='bulk-element-nr'>Foreløpig beregnet refusjon</Element>
      <div>
        <Normaltekst className='beregnet-refusjon'>{formatNumberAsCurrency(refusjon)}</Normaltekst>
      </div>
    </div>
  );
};

export default BeregnetRefusjon;
