import React from 'react';
import { useSelector } from 'react-redux';

import UserMenu from '../UserMenu/UserMenu';
import { StyledNavLink } from '../UserMenu/UserMenu.styled';
import { StyledNav } from './Navigation.styled';
import { selectAuthUserAuthenticated } from 'redux/auth.selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthUserAuthenticated);

  return (
    <>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authenticated ? (
            <UserMenu />
          ) : (
            <div>
              <StyledNavLink to="/register">Sing up</StyledNavLink>
              <StyledNavLink to="/login">Log in</StyledNavLink>
            </div>
          )}
        </StyledNav>
    </>
  );
};

export default Navigation;