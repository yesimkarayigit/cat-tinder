import styled from 'styled-components';
import { devices } from '../../utility';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin: 20px 0;
  background-color: ${(props) => props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.halfBaked};
  margin-right: 10px;
  white-space: nowrap;
`;

export const EmojiStyled = styled.img`
  height: 50px;
`;
