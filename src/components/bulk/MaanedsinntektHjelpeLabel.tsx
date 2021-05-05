import React from 'react';
import HjelpeLabel from '../felles/HjelpeLabel/HjelpeLabel';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locales/LangKey';
import Oversettelse from '../../locales/Oversettelse';
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
