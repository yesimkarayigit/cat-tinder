import React, { FC } from 'react';
import { CardStyled, PhotoStyled } from '../styles/styled';

interface CardProps {
  breed: any;
}

export const Card: FC<CardProps> = ({ breed }) => {
  console.log('breeds-energy_level', breed.breeds[0].energy_level);
  console.log('breeds-affection_level', breed.breeds[0].affection_level);
  console.log('breeds-intelligence', breed.breeds[0].intelligence);

  return (
    <CardStyled>
      <PhotoStyled src={breed.url} />
      <div>hey</div>
    </CardStyled>
  );
};
