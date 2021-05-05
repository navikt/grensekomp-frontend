import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import Side from '../felles/Side';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side
      bedriftsmeny={false}
      sidetittel={t(LangKey.TOKEN_FORNYET)}
      title={t(LangKey.LOGIN_RENEWED)}
      subtitle={t(LangKey.LOGIN)}
    >
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>{t(LangKey.LOGIN_RENEWED)}</Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>{t(LangKey.LOGIN_RENEWED_INFO)}</Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
