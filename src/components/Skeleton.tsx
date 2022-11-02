import React from 'react';
import { Container, Line, Post } from '../styles/skeleton.styled';

export const Skeleton = () => {
  return (
    <Container>
      <Post>
        <Line />
        <Line />
      </Post>

      <Post>
        <Line />
        <Line />
      </Post>
    </Container>
  );
};
