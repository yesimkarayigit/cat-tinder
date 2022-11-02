import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 210px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.iceCold};
  border: none;
  border-radius: 3px;

  :focus-visible {
    outline: none;
  }
`;
