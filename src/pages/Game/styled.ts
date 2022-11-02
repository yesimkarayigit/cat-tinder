import styled from 'styled-components';

export const PawStyled = styled.img`
  height: 12px;
  margin: 0 2px;
`;

export const FinishButtonStyled = styled.button`
  width: 160px;
  margin: 20px 0;
  padding: 6px;
  background-color: ${(props) => props.theme.colors.iceCold};
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
`;

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 260px;
  height: 350px;
  margin-top: 20px;
`;

export const Card = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  width: 80vw;
  max-width: 260px;
  height: 340px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: 0;
  margin: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const InfoBox = styled.div`
  position: absolute;
  bottom: 0;
  margin: 10px;
  width: 70%;
  padding: 4px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;
