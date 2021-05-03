import React from 'react';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';
import Oversettelse from '../../locales/Oversettelse';
import { Innholdstittel } from 'nav-frontend-typografi';

const MaanedsinntektHjelpeLabel = () => {
  const { t } = useTranslation();
  return (
    <HjelpeLabel label={t(Key.BEREGNET_INNTEKT)}>
      <Innholdstittel>{t(Key.BEREGNING_INNTEKT)}</Innholdstittel>
      <Oversettelse langKey={Key.BULKINNSENDING_INFO} />
    </HjelpeLabel>
  );
};
export default MaanedsinntektHjelpeLabel;
