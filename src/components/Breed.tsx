import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectStyled } from '../styles/styled';

// const API_KEY = process.env.REACT_APP_CAT_API_KEY;

export const Breed = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChangeSelect = (e: any) => {
    setSelectedBreed(e.target.value);
  };

  /*   const getCatPhoto = () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
        }
      )
      .then((response) => {
        console.log('response?.data', response?.data);
      })
      .catch((e) => {
        console.log('Error:', e);
      });
  }; */

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
    <SelectStyled value={selectedBreed} onChange={handleChangeSelect}>
      {breeds.map((breed: any) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </SelectStyled>
  );
};
