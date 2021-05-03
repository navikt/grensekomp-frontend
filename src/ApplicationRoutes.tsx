import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import lenker from './config/lenker';
import Bulkinnsending from './components/bulk';
import TokenFornyet from './components/login/TokenFornyet';
import OversiktKrav from './components/oversikt-krav';

export const ApplicationRoutes = () => {
  let location = useLocation();
  const newLocation = '/nb/batchinnsending/krav' + location.search;
  return (
    <div className='application-routes'>
      <Switch>
        <Route path={lenker.Home} exact={true}>
          <Redirect from='/' to={newLocation} />
        </Route>
        <Route path={lenker.Bulkinnsending}>
          <Bulkinnsending />
        </Route>
        <Route path={lenker.OversiktKrav}>
          <OversiktKrav />
        </Route>
        <Route path={lenker.TokenFornyet}>
          <TokenFornyet />
        </Route>
      </Switch>
    </div>
  );
};
