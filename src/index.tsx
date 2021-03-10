import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';
import '@navikt/bedriftsmeny/lib/bedriftsmeny.css';
import { version } from '../package.json';

// @ts-ignore
document.querySelector('meta[name=buildNr]').setAttribute('content', version);

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
