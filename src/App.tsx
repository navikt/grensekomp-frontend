import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/login/LoginContext';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import env from './config/environment';
import { LoginStatus } from './context/login/LoginStatus';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import lenker, { buildLenke } from './config/lenker';
import TokenFornyet from './components/login/TokenFornyet';
import LanguageBundle from './config/LanguageBundle';
import i18next from 'i18next';
import { Language, LanguageProvider } from '@navikt/helse-arbeidsgiver-felles-frontend';

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
