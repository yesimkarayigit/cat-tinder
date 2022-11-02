import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBreed, setTime } from '../../store/actions';
import { Paragragh } from '../../styles';
import { ReturnButtonStyled } from './styled';
import { theme } from '../../theme';

export const ReturnButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/');

    dispatch(setBreed('abys'));
    dispatch(setTime(0));
  };

  return (
    <ReturnButtonStyled onClick={handleClick}>
      <Paragragh fontWeight={theme.fontWeights.medium} fontSize="1.2rem">
        Home
      </Paragragh>
    </ReturnButtonStyled>
  );
};
