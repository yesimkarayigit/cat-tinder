import styled, { keyframes } from 'styled-components';

const shine = keyframes`{
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 140px;
    }
  }`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 80px;
`;

export const Line = styled.div`
  float: left;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: ${shine} 1.6s infinite linear;
  background-color: #ddd;
`;
