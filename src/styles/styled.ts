import styled from 'styled-components';

interface FlexProps {
  alignItems?: string;
}

interface ParagraghProps {
  fontSize?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
`;

export const Paragragh = styled.div<ParagraghProps>`
  font-size: ${(props) => props.fontSize || '18px'};
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 20px;
  background-color: #e1ffee;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 10px;
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
`;

export const LogoStyled = styled.img`
  object-fit: contain;
  height: 90px;
  border-radius: 10px;
`;

export const BrandStyled = styled.h2`
  margin: 0;
  color: #7fbcd2;
  margin-right: 10px;
`;

export const EmojiStyled = styled.img`
  height: 50px;
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
  flex-wrap: wrap;
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

export const IconStyled = styled.img`
  height: 20px;
  margin: 0 6px;
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
