import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';
import '@navikt/bedriftsmeny/lib/bedriftsmeny.css';
import { version } from '../package.json';
import * as Sentry from '@sentry/browser';

// @ts-ignore
document.querySelector('meta[name=buildNr]').setAttribute('content', version);

Sentry.init({
  dsn: 'https://fe8f051bd96d419c95b3c1d414874479@sentry.gc.nav.no/73',
  environment: 'dev'
});

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
