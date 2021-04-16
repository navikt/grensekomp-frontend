import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/login/LoginContext';
import { ApplicationRoutes } from './ApplicationRoutes';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from './context/arbeidsgiver/ArbeidsgiverContext';
import env from './config/environment';
import { LoginStatus } from './context/login/LoginStatus';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

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
  <I18nextProvider i18n={i18n}>
    <LoginProvider baseUrl={basePath} status={loginStatus} loginServiceUrl={loginServiceUrl}>
      <ArbeidsgiverProvider baseUrl={basePath} status={arbeidsgiverStatus} arbeidsgivere={arbeidsgivere}>
        <ApplicationRoutes />
      </ArbeidsgiverProvider>
    </LoginProvider>
  </I18nextProvider>
);

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
