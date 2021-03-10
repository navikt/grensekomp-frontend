import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lenker from './config/lenker';
import Enkeltinnsending from './components/enkelt';
import EnkeltKvittering from './components/kvittering';
import Bulkinnsending from './components/bulk';
import BulkKvittering from './components/kvittering';
import TokenFornyet from './components/tokenfornyet';
import Forside from './components/forside';

export const ApplicationRoutes = () => (
  <div className='application-routes'>
    <Switch>
      <Route path={lenker.Enkeltinnsendinng} exact={true} render={() => <Enkeltinnsending />} />
      <Route path={lenker.EnkeltKvittering} exact={true} render={() => <EnkeltKvittering />} />
      <Route path={lenker.Bulkinnsending} exact={true} render={() => <Bulkinnsending />} />
      <Route path={lenker.BulkKvittering} render={() => <BulkKvittering />} />
      <Route path={lenker.TokenFornyet} render={() => <TokenFornyet />} />
      <Route path={lenker.Home} render={() => <Forside />} />
    </Switch>
  </div>
);
