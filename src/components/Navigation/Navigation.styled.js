import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5px;
  
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  gap: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  
    gap: 15px;
  }
`;
export const StyledHomePage = styled.p`
  display: flex;
  gap: 150px;
  flex-direction: column;
  justify-content: center;
  margin-top: 110px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;
export const StyledContacts = styled.p`
  font-size: 25px;
  padding-left: 20px;
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  /* padding-left: 20px; */
`;