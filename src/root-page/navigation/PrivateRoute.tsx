import React from 'react';
import { LOGIN } from 'root-page/constants';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const storedUser = localStorage.getItem('user');
  const hasStoredUser = !!storedUser;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={props => (hasStoredUser ? <Component {...props} /> : <Redirect to={`/${LOGIN}`} />)} />;
};

export default PrivateRoute;
