import styled from 'styled-components';

export const WrapForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Title = styled.p`
  margin-bottom: 20px;
  text-align: center;

  font-size: 28px;
  font-weight: bold;
  color: pink;
`;

export const StyledForm = styled.form`
  padding: 0 20px 30px 20px;
  min-width: 320px;
`;

export const StyledInput = styled.input`
  padding: 12px;
  margin-top: 10px;
  width: 280px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  &:focus {
    border: 2px solid pink;
    outline: 1px solid pink;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  font-family: Segoe UI;
  color: #5e5e5e;
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

