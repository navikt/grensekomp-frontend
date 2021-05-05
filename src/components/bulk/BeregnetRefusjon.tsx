import React from 'react';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Dato from '../../utils/dato/Dato';
import kalkulerRefusjon from './KalkulerRefusjon';
import formatNumberAsCurrency from '../../utils/formatNumberAsCurrency';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import Tekstomrade, { BoldRule } from 'nav-frontend-tekstomrade';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locales/LangKey';

interface BeregnetRefusjonProps {
  inntekt?: string;
  fom?: Dato;
  tom?: Dato;
}

const BeregnetRefusjon = ({ inntekt, fom, tom }: BeregnetRefusjonProps) => {
  const { t } = useTranslation();
  const refusjon = kalkulerRefusjon(inntekt, fom, tom);
  return (
    <div>
      <Element className='bulk-element-nr'>
        <HjelpeLabel label={t(LangKey.BEREGNET_REFUSJON)}>
          <Tekstomrade rules={[BoldRule]}>{t(LangKey.BEREGNET_REFUSJON_INFO)}</Tekstomrade>
        </HjelpeLabel>
      </Element>
      <div>
        <Normaltekst className='beregnet-refusjon'>{formatNumberAsCurrency(refusjon)}</Normaltekst>
      </div>
    </div>
  );
};

export default BeregnetRefusjon;
