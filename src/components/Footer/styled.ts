import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px 0;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const IconStyled = styled.img`
  height: 20px;
  margin: 0 6px;
`;
