import React from 'react';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';
import Oversettelse from '../felles/Oversettelse/Oversettelse';
import { Innholdstittel } from 'nav-frontend-typografi';

const MaanedsinntektHjelpeLabel = () => {
  const { t } = useTranslation();
  return (
    <HjelpeLabel label={t(LangKey.BEREGNET_INNTEKT)}>
      <Innholdstittel>{t(LangKey.BEREGNING_INNTEKT)}</Innholdstittel>
      <Oversettelse langKey={LangKey.MAANEDSINNTEKT_HJELPELABEL_INFO} />
    </HjelpeLabel>
  );
};
export default MaanedsinntektHjelpeLabel;
