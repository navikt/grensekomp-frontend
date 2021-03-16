import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lenker from './config/lenker';
import Kvittering from './components/kvittering';
import Bulkinnsending from './components/bulk';
import TokenFornyet from './components/tokenfornyet';
import Forside from './components/forside';

export const ApplicationRoutes = () => (
  <div className='application-routes'>
    <Switch>
      <Route path={lenker.Bulkinnsending} exact={true} render={() => <Bulkinnsending />} />
      <Route path={lenker.BulkKvittering} exact={true} render={() => <Kvittering />} />
      <Route path={lenker.TokenFornyet} exact={true} render={() => <TokenFornyet />} />
      <Route path={lenker.Home} render={() => <Forside />} />
    </Switch>
  </div>
);
