import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paragragh, SelectStyled } from '../styles/styled';
import { useDispatch, useSelector } from 'react-redux';
import { setBreed } from '../store/actions';
import { getBreed } from '../store/selectors';

export const Breed = () => {
  const dispatch = useDispatch();
  const breed = useSelector(getBreed);

  const [breeds, setBreeds] = useState([]);

  const handleChangeSelect = (e: any) => {
    dispatch(setBreed(e.target.value));
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
    <div>
      <Paragragh fontWeight="600">Breed</Paragragh>
      <SelectStyled value={breed} onChange={handleChangeSelect}>
        {breeds.map((breed: any) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </SelectStyled>
    </div>
  );
};
