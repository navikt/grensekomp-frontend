import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';

interface ApplicationProps {
  arbeidsgivere?: Array<Organisasjon>;
  basePath?: string;
  loginServiceUrl?: string;
}

export const Application = ({}: ApplicationProps) => <h1>grensekomp</h1>;

const App = () => (
  <BrowserRouter basename='grensekomp'>
    <Application />
  </BrowserRouter>
);

export default App;
