import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ChoicesContainerStyled,
  ChoicesWrapperStyled,
  StartButtonStyled,
} from '../styles/styled';

export const Choices = () => {
  const [time, setTime] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChange = (e: any) => {
    setTime(e);
  };

  const handleChangeSelect = (e: any) => {
    setSelectedBreed(e);
  };

  const handleClick = () => {
    console.log('click');
  };

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        setBreeds(response?.data);
      })
      .catch((e) => {
        console.log('Error:', e);
      });
  }, []);

  return (
    <ChoicesContainerStyled>
      <ChoicesWrapperStyled>
        <input
          type="number"
          value={time}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />

        <select
          value={selectedBreed}
          onChange={(e) => handleChangeSelect(e.currentTarget.value)}
        >
          {breeds.map((breed: any) => (
            <option value={breed.name} key={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </ChoicesWrapperStyled>
      <StartButtonStyled onClick={handleClick}>Start</StartButtonStyled>
    </ChoicesContainerStyled>
  );
};
