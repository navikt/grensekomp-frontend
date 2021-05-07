import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom';
import { LoginProvider } from './context/login/LoginContext';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import env from './config/environment';
import { LoginStatus } from './context/login/LoginStatus';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import lenker, { buildLenke } from './config/lenker';
import PageNotFound from './components/felles/PageNotFound/PageNotFound';
import TokenFornyet from './components/login/TokenFornyet';
import Language from './locale/Language';
import { LanguageProvider } from './context/language/LanguageContext';
import Languages from './config/Languages';
import i18n from 'i18next';

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
      <LanguageProvider
        i18n={i18n}
        useParams={useParams}
        bundle={Languages}
        defaultLanguage='nb'
        languages={['nb', 'en']}
      >
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
  </Switch>
);

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
