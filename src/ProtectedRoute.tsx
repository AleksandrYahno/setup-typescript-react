import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default ProtectedRoute;
