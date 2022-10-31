import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #e1ffee;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-bottom: 24px;
`;

export const LogoStyled = styled.img`
  object-fit: contain;
  border-radius: 10px;
`;

export const ChoicesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChoicesWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  font-size: 18px;
  padding: 10px;
  background-color: #a5f1e9;
  border: none;
  border-radius: 3px;

  :focus-visible {
    outline: none;
  }
`;

export const SelectStyled = styled.select`
  font-size: 18px;
  padding: 10px;
  background-color: #a5f1e9;
  border: none;
  border-radius: 3px;

  :focus-visible {
    outline: none;
  }
`;

export const StartButtonStyled = styled.button`
  width: 100px;
  background-color: aqua;
`;
