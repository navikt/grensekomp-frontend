import Key from './Key';
import { useTranslation } from 'react-i18next';
import Tekstomrade, { BoldRule, HighlightRule, LinebreakRule } from 'nav-frontend-tekstomrade';
import { ListeRule } from '../utils/tekstomrade/Liste';
import { UListeRule } from '../utils/tekstomrade/UListe';
import { LenkeRule } from '../utils/tekstomrade/Lenke';
import React from 'react';

interface OversettelseProps {
  langKey: Key;
}

const Oversettelse = ({ langKey }: OversettelseProps) => {
  const { t } = useTranslation();
  return (
    <Tekstomrade rules={[ListeRule, UListeRule, HighlightRule, BoldRule, LenkeRule, LinebreakRule]}>
      {t(langKey)}
    </Tekstomrade>
  );
};

export default Oversettelse;
