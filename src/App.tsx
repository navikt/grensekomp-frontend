import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import env from './config/environment';
import lenker, { buildLenke } from './config/lenker';
import LanguageBundle from './config/LanguageBundle';
import i18next from 'i18next';
import {
  ArbeidsgiverProvider,
  ArbeidsgiverStatus,
  Language,
  LanguageProvider,
  LoginProvider,
  TokenFornyet
} from '@navikt/helse-arbeidsgiver-felles-frontend';
import { LoginStatus } from './context/login/LoginStatus';

interface ApplicationProps {
  loginStatus?: LoginStatus;
  arbeidsgiverStatus?: ArbeidsgiverStatus;
  arbeidsgivere?: Array<Organisasjon>;
  basePath?: string;
  loginServiceUrl?: string;
}

export const Application = ({
  loginStatus = LoginStatus.Checking,
  arbeidsgiverStatus = ArbeidsgiverStatus.NotStarted,
  arbeidsgivere,
  basePath = env.baseUrl,
  loginServiceUrl = env.loginServiceUrl
}: ApplicationProps) => (
  <Switch>
    <Route path={lenker.Home} exact={true}>
      <Redirect from='/' to={buildLenke(lenker.Innsending, Language.nb)} />
    </Route>
    <Route path='/batchinnsending/krav'>
      <Redirect from='/' to={buildLenke(lenker.Innsending, Language.nb)} />
    </Route>
    <Route path={lenker.TokenFornyet}>
      <TokenFornyet />
    </Route>
    <Route path='/:language/*'>
      <LoginProvider baseUrl={basePath} status={loginStatus} loginServiceUrl={loginServiceUrl}>
        <ArbeidsgiverProvider baseUrl={basePath} status={arbeidsgiverStatus} arbeidsgivere={arbeidsgivere}>
          <ApplicationRoutes />
        </ArbeidsgiverProvider>
      </LoginProvider>
    </Route>
  </Switch>
);

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <LanguageProvider i18n={i18next} bundle={LanguageBundle} languages={['nb', 'en']}>
      <Application />
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
