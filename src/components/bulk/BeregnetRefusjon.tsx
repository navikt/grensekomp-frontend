import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Dato from '../../utils/dato/Dato';
import kalkulerRefusjon from './KalkulerRefusjon';
import formatNumberAsCurrency from '../../utils/formatNumberAsCurrency';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import Tekstomrade, { BoldRule } from 'nav-frontend-tekstomrade';

interface BeregnetRefusjonProps {
  inntekt?: string;
  fom?: Dato;
  tom?: Dato;
}

const BeregnetRefusjon = ({ inntekt, fom, tom }: BeregnetRefusjonProps) => {
  const refusjon = kalkulerRefusjon(inntekt, fom, tom);
  return (
    <div>
      <Element className='bulk-element-nr'>
        <HjelpeLabel label='Foreløpig beregnet refusjon'>
          <Tekstomrade rules={[BoldRule]}>
            Denne beregningen tar _ikke_ høyde for andre utbetalinger den ansatte eventuelt får fra NAV, for eksempel
            graderte sykepenger. Utbetalinger du allerede får refusjon for, vil derfor bli trukket fra beløpet du nå
            søker om.
          </Tekstomrade>
        </HjelpeLabel>
      </Element>
      <div>
        <Normaltekst className='beregnet-refusjon'>{formatNumberAsCurrency(refusjon)}</Normaltekst>
      </div>
    </div>
  );
};

export default BeregnetRefusjon;
