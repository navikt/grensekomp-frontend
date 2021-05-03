import React from 'react';
import './RadNr.sass';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

interface RadNrProps {
  nr: number;
  className?: string;
}

const RadNr = (props: RadNrProps) => {
  const { t } = useTranslation();
  return <div className={t(Key.ROW_NUMBER) + props.className ?? ''}>{props.nr}</div>;
};

export default RadNr;
