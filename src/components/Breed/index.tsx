import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBreed } from '../../store/actions';
import { getBreed, getBreeds } from '../../store/selectors';
import { SelectStyled } from './styled';
import { Box, Paragragh } from '../../styles';
import { theme } from '../../theme';

export const Breed = () => {
  const dispatch = useDispatch();
  const breed = useSelector(getBreed);
  const breeds = useSelector(getBreeds);

  const handleChangeSelect = (e: any) => {
    dispatch(setBreed(e.target.value));
  };

  return (
    <Box margin="0 0 10px 0">
      <Paragragh fontWeight={theme.fontWeights.semiBold}>Breed</Paragragh>
      <SelectStyled value={breed} onChange={handleChangeSelect}>
        {breeds.map((breed: any) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </SelectStyled>
    </Box>
  );
};
