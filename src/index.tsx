import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import '@navikt/bedriftsmeny/lib/bedriftsmeny.css';
import 'nav-frontend-core/dist/main.css';
import 'nav-frontend-typografi-style/dist/main.css';
import 'nav-frontend-skjema-style/dist/main.css';
import 'nav-frontend-knapper-style/dist/main.css';
import 'nav-frontend-hjelpetekst-style/dist/main.css';
import 'nav-frontend-alertstriper-style/dist/main.css';
import 'nav-frontend-grid-style/dist/main.css';
import 'nav-frontend-chevron-style/dist/main.css';
import 'nav-frontend-lenker-style/dist/main.css';
import 'nav-frontend-paneler-style/dist/main.css';
import 'nav-frontend-spinner-style/dist/main.css';
import 'nav-frontend-veileder-style/dist/main.css';
import 'nav-frontend-veilederpanel-style/dist/main.css';
import 'nav-frontend-modal-style/dist/main.css';
import 'nav-frontend-popover-style/dist/main.css';
import 'nav-frontend-tabell-style/dist/main.css';
import '@navikt/helse-arbeidsgiver-felles-frontend/dist/library.css';
import env, { EnvironmentType } from './config/environment';
import App from './App';
import { version } from '../package.json';

// @ts-ignore
document.querySelector('meta[name=buildNr]').setAttribute('content', version);

if (env.environmentMode !== EnvironmentType.LOCAL) {
  Sentry.init({
    dsn: 'https://fe8f051bd96d419c95b3c1d414874479@sentry.gc.nav.no/73',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.5,
    environment: 'dev'
  });
}

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
