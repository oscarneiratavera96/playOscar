import { lazy, Suspense } from 'react';
import { CATEGORY, HOME, LOGIN, MOVIE } from 'root-page';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading/Loading';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Category = lazy(() => import('pages/Category/Category'));
const MOVIECOMPONENT = lazy(() => import('pages/Movie/Movie'));

const RouterConfig = ({ path }: { path: string }) => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {/* Ruta para el componente Login */}
      <Route path={`${path}${LOGIN}`}>
        <Login />
      </Route>
      {/* Ruta protegida para el componente Home */}
      <PrivateRoute path={`${path}${HOME}`} component={Home} />

      {/* Ruta protegida para el componente Home */}
      <PrivateRoute path={`${path}${CATEGORY}`} component={Category} />

      {/* Ruta protegida para el componente Home */}
      <PrivateRoute path={`${path}${MOVIE}`} component={MOVIECOMPONENT} />

      {/* Ruta predeterminada, por ejemplo, para manejar rutas no coincidentes */}
      <Route path="*" component={Login} />
    </Switch>
  </Suspense>
);

export default RouterConfig;
