import styled from 'styled-components';

interface CountDownBoxStyledProps {
  backgroundColor?: string;
}

export const CountDownBoxStyled = styled.div<CountDownBoxStyledProps>`
  padding: 6px;
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor || '#e1ffb1'};
  border-radius: 6px;
`;
