import { ROOT } from 'navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LOGIN, RootPage } from 'root-page';

const RootRouterConfig = () => (
  <Switch>
    <Redirect path={ROOT} exact to={LOGIN} />
    <Route path={ROOT}>
      <RootPage path={ROOT} />
    </Route>
  </Switch>
);
export default RootRouterConfig;
