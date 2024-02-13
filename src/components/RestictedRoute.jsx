import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthUserAuthenticated } from 'redux/auth.selectors';

const RestictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectAuthUserAuthenticated);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestictedRoute;