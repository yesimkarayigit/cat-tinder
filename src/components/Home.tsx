import React, { useEffect } from 'react';
import { Breed } from './Breed';
import {
  HomeContainerStyled,
  HomeWrapperStyled,
  Paragragh,
  StartButtonStyled,
} from '../styles/styled';

import { TimeInput } from './TimeInput';
import { useDispatch } from 'react-redux';
import { finishGame, setBreed, setTime, startGame } from '../store/actions';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(startGame(true));
    dispatch(finishGame(false));

    navigate('/game');
  };

  useEffect(() => {
    dispatch(setBreed(''));
    dispatch(setTime(''));
  }, []);

  return (
    <HomeContainerStyled>
      <HomeWrapperStyled>
        <TimeInput />
        <Breed />
      </HomeWrapperStyled>
      <StartButtonStyled onClick={handleClick}>
        <Paragragh fontWeight="500" fontSize="18px">
          Play
        </Paragragh>
      </StartButtonStyled>
    </HomeContainerStyled>
  );
};
