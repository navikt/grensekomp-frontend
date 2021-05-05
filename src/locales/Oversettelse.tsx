import LangKey from './LangKey';
import { useTranslation } from 'react-i18next';
import Tekstomrade, { BoldRule, HighlightRule, LinebreakRule } from 'nav-frontend-tekstomrade';
import { ListeRule } from '../utils/tekstomrade/Liste';
import { UListeRule } from '../utils/tekstomrade/UListe';
import { LenkeRule } from '../utils/tekstomrade/Lenke';
import React from 'react';

interface OversettelseProps {
  langKey: LangKey;
  variables?: any;
}

/*
bullets: --
ul start: -##
ul end: ##-
bold: _text_
link: [link name](link url)
 */
const Oversettelse = ({ langKey, variables }: OversettelseProps) => {
  const { t } = useTranslation();
  return (
    <Tekstomrade rules={[ListeRule, UListeRule, HighlightRule, BoldRule, LenkeRule, LinebreakRule]}>
      {t(langKey, variables)}
    </Tekstomrade>
  );
};

export default Oversettelse;
