import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import Side from '../felles/Side';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side bedriftsmeny={false} sidetittel='Søknadsskjema' title={t(Key.LOGIN_RENEWED)} subtitle={t(Key.LOGIN)}>
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>{t(Key.LOGIN_RENEWED)}</Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>{t(Key.LOGIN_RENEWED_INFO)}</Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
