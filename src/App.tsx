import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import Side from './components/Side';

interface ApplicationProps {
  arbeidsgivere?: Array<Organisasjon>;
  basePath?: string;
  loginServiceUrl?: string;
}

export const Application = ({}: ApplicationProps) => <Side sidetittel='Grensekomp'>grensekomp</Side>;

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
