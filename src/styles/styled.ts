import styled from 'styled-components';

const sizes = {
  mobile: '380px',
  tablet: '880px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
};

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
}

interface CountDownBoxStyledProps {
  backgroundColor?: string;
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
  margin: 0;
  white-space: nowrap;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  background-color: #e1ffee;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
  flex-wrap: wrap;

  @media ${devices.mobile} {
    justify-content: center;
  }
`;

export const LogoStyled = styled.img`
  object-fit: contain;
  height: 90px;
  border-radius: 10px;
  cursor: pointer;

  @media ${devices.mobile} {
    margin-right: 0;
  }
`;

export const BrandStyled = styled.h2`
  margin: 0;
  color: #7fbcd2;
  margin-right: 10px;
  white-space: nowrap;
`;

export const EmojiStyled = styled.img`
  height: 50px;
`;

export const HomeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HomeWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 50%;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    justify-content: center;
  }
`;

export const InputStyled = styled.input`
  width: 210px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  background-color: #a5f1e9;
  border: none;
  border-radius: 3px;

  :focus-visible {
    outline: none;
  }
`;

export const SelectStyled = styled.select`
  width: 210px;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  background-color: #a5f1e9;
  border: none;
  border-radius: 3px;

  :focus-visible {
    outline: none;
  }
`;

export const StartButtonStyled = styled.button`
  width: 160px;
  padding: 6px;
  background-color: #ff7f3f;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
`;

export const IconStyled = styled.img`
  height: 20px;
  margin: 0 6px;
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PawStyled = styled.img`
  height: 12px;
  margin: 0 2px;
`;

export const CountDownBoxStyled = styled.div<CountDownBoxStyledProps>`
  padding: 6px;
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor || '#e1ffb1'};
  border-radius: 6px;
`;

export const ReturnButtonStyled = styled.button`
  width: 160px;
  padding: 6px;
  background-color: #e1ffb1;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
`;
