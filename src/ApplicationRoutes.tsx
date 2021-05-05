import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lenker from './config/lenker';
import Bulkinnsending from './components/bulk';
import OversiktKrav from './components/oversikt-krav';
import PageNotFound from './components/felles/PageNotFound/PageNotFound';

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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};
