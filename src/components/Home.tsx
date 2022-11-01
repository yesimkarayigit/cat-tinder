import React from 'react';
import { Breed } from './Breed';
import {
  HomeContainerStyled,
  HomeWrapperStyled,
  StartButtonStyled,
} from '../styles/styled';

import { TimeInput } from './TimeInput';
import { useDispatch } from 'react-redux';
import { finishGame, startGame } from '../store/actions';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(startGame(true));
    dispatch(finishGame(false));

    navigate('/game');
  };

  return (
    <HomeContainerStyled>
      <HomeWrapperStyled>
        <TimeInput />
        <Breed />
      </HomeWrapperStyled>
      <StartButtonStyled onClick={handleClick}>
        Start the game
      </StartButtonStyled>
    </HomeContainerStyled>
  );
};
