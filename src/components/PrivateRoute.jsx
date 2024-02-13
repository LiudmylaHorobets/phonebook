import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthUserAuthenticated } from 'redux/auth.selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthUserAuthenticated);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;