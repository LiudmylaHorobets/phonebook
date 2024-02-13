import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutThunk } from 'redux/authSlice';
import { StyledButton, StyledDiv, StyledNavLink, WrapUserMenu } from './UserMenu.styled';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUserData);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  
  return (
    <>
      <WrapUserMenu>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </WrapUserMenu>
      <StyledDiv>
        <p>Hello, {name}</p>
        <StyledButton className="logout" onClick={handleLogout}>
        Log out
        </StyledButton>
      </StyledDiv>
    </>
  );
};

export default UserMenu;