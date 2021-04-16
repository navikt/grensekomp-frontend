import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lenker from './config/lenker';
import Bulkinnsending from './components/bulk';
import TokenFornyet from './components/login/TokenFornyet';
import OversiktKrav from './components/oversikt-krav';

export const ApplicationRoutes = () => (
  <div className='application-routes'>
    <Switch>
      <Route path={lenker.Home} exact={true} render={() => <Bulkinnsending />} />
      <Route path={lenker.Bulkinnsending} exact={true} render={() => <Bulkinnsending />} />
      <Route path={lenker.OversiktKrav} exact={true} render={() => <OversiktKrav />} />
      <Route path={lenker.TokenFornyet} exact={true} render={() => <TokenFornyet />} />
    </Switch>
  </div>
);
