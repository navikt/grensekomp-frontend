import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/login/LoginContext';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import env from './config/environment';
import { LoginStatus } from './context/login/LoginStatus';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import LocaleProvider from './locale/LocaleProvider';
import lenker, { buildLenke } from './config/lenker';
import PageNotFound from './components/felles/PageNotFound/PageNotFound';
import TokenFornyet from './components/login/TokenFornyet';
import Language from './locale/Language';

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
    <Route path='/:language(nb|en)/*'>
      <LocaleProvider>
        <LoginProvider baseUrl={basePath} status={loginStatus} loginServiceUrl={loginServiceUrl}>
          <ArbeidsgiverProvider baseUrl={basePath} status={arbeidsgiverStatus} arbeidsgivere={arbeidsgivere}>
            <ApplicationRoutes />
          </ArbeidsgiverProvider>
        </LoginProvider>
      </LocaleProvider>
    </Route>
    <Route path='/:language/*'>
      <PageNotFound />
    </Route>
    <Route>
      <LocaleProvider lang={Language.nb}>
        <PageNotFound />
      </LocaleProvider>
    </Route>
  </Switch>
);

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
