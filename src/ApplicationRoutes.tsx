import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lenker from './config/lenker';
import Bulkinnsending from './components/bulk';
import OversiktKrav from './components/oversikt-krav';
import { PageNotFound, TokenFornyet } from '@navikt/helse-arbeidsgiver-felles-frontend';

export const ApplicationRoutes = () => {
  return (
    <div className='application-routes'>
      <Switch>
        <Route path={lenker.Innsending}>
          <Bulkinnsending />
        </Route>
        <Route path={lenker.Oversikt}>
          <OversiktKrav />
        </Route>
        <Route path={lenker.TokenFornyet}>
          <TokenFornyet />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};
