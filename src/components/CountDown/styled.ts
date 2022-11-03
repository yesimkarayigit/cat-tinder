import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { theme } from '../../theme';

interface CountDownBoxStyledProps {
  isLastTenSeconds?: boolean;
}

export const CountDownBoxStyled = styled.div<CountDownBoxStyledProps>`
  padding: 6px;
  margin: 0 auto;
  background-color: ${ifProp(
    { isLastTenSeconds: true },
    `${theme.colors.danger}`,
    `${theme.colors.tidal}`
  )};
  border-radius: 6px;
`;
