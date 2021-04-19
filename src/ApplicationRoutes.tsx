import React, { useEffect } from 'react';
import { Route, Switch, useLocation, useParams } from 'react-router-dom';
import lenker from './config/lenker';
import Bulkinnsending from './components/bulk';
import TokenFornyet from './components/login/TokenFornyet';
import OversiktKrav from './components/oversikt-krav';

const KravEdit = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.log('location', location);
  }, [location]);

  console.log('Params', params);

  return <div></div>;
};

export const ApplicationRoutes = () => (
  <div className='application-routes'>
    <Switch>
      <Route path={lenker.Home} exact={true} render={() => <Bulkinnsending />} />
      <Route path={lenker.Bulkinnsending} exact={true} render={() => <Bulkinnsending />} />
      <Route path='/krav/:orgnr/:fnr/:land' exact={true} render={() => <KravEdit />} />
      <Route path={lenker.OversiktKrav} exact={true} render={() => <OversiktKrav />} />
      <Route path={lenker.TokenFornyet} exact={true} render={() => <TokenFornyet />} />
    </Switch>
  </div>
);
