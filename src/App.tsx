import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/login/LoginContext';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import env from './config/environment';
import { LoginStatus } from './context/login/LoginStatus';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import LanguageProvider from './locales/LanguageProvider';
import lenker from './config/lenker';
import PageNotFound from './components/PageNotFound';

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
      <Redirect from='/' to='/nb/batchinnsending/krav' />
    </Route>
    <Route path='/:language(nb|en)/*'>
      <LanguageProvider>
        <LoginProvider baseUrl={basePath} status={loginStatus} loginServiceUrl={loginServiceUrl}>
          <ArbeidsgiverProvider baseUrl={basePath} status={arbeidsgiverStatus} arbeidsgivere={arbeidsgivere}>
            <ApplicationRoutes />
          </ArbeidsgiverProvider>
        </LoginProvider>
      </LanguageProvider>
    </Route>
    <Route path='/:language/*'>
      <PageNotFound />
    </Route>
    <Route>
      <PageNotFound />
    </Route>
  </Switch>
);

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
