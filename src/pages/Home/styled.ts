import styled from 'styled-components';
import { devices } from '../../utility';

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

export const StartButtonStyled = styled.button`
  width: 160px;
  padding: 6px;
  background-color: #ff7f3f;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
`;
