import React from 'react';
import Side from '../Side';
import Oversettelse from '../Oversettelse/Oversettelse';
import LangKey from '../../../locale/LangKey';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Side sidetittel={t(LangKey.PAGE_NOT_FOUND_TITLE)} title={''} subtitle='' bedriftsmeny={false}>
      <Oversettelse langKey={LangKey.PAGE_NOT_FOUND_DESCRIPTION} />
    </Side>
  );
};

export default PageNotFound;
