import styled from 'styled-components';

interface FlexProps {
  alignItems?: string;
}

interface BoxProps {
  margin?: string;
}

interface ParagraghProps {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
`;

export const Box = styled.div<BoxProps>`
  margin: ${(props) => props.margin || '0'};
`;

export const Paragragh = styled.p<ParagraghProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.hintGreen};
`;
