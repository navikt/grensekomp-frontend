import React from 'react';
import Side from '../Side';
import LangKey from '../../../language/LangKey';
import { useTranslation } from 'react-i18next';
import { Oversettelse } from '@navikt/helse-arbeidsgiver-felles-frontend';

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Side sidetittel={t(LangKey.PAGE_NOT_FOUND_TITLE)} title={''} subtitle='' bedriftsmeny={false}>
      <Oversettelse langKey={LangKey.PAGE_NOT_FOUND_DESCRIPTION} />
    </Side>
  );
};

export default PageNotFound;
