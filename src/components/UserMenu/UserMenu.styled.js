import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
display: flex;
  padding: 5px;
  text-decoration: none;
  font-size: 20px;

  color: black;

  &:hover,
  &:focus,
  &.active {
    color: pink;
    font-weight: 500;
  }
`;

export const WrapUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  text-decoration: none;
  p {
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    margin: 0;
  }
`;
export const StyledButton = styled.button`
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 5px;
  font-weight: 500;
  font-size: 20px;
  color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: pink;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  &.delete {
    margin-left: 10px;
    padding: 3px 0px 0px 0px;
    font-size: 18px;
    width: 30px;
    background-color: white;
    fill: red;
    &:hover,
    &:focus,
    &:active {
      color: pink;
      background-color: white;
    }
  }
  &.logout {
    padding: 5px;
    font-size: 20px;
  }
  &:hover,
  &:active {
    color: pink;
    background-color: white;
  }
`;