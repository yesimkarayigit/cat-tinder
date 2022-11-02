import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBreed, getBreeds, getTime } from '../store/selectors';
import { finishGame, setBreeds, startGame } from '../store/actions';
import { Breed } from './Breed';
import { TimeInput } from './TimeInput';
import { Skeleton } from './Skeleton';
import {
  HomeContainerStyled,
  HomeWrapperStyled,
  Paragragh,
  StartButtonStyled,
} from '../styles/styled';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const breeds = useSelector(getBreeds);
  const breed = useSelector(getBreed);
  const time = useSelector(getTime);

  const handleClick = () => {
    dispatch(startGame(true));
    dispatch(finishGame(false));

    if (time && breed) {
      navigate('/game');
    }
  };

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        dispatch(setBreeds(response?.data));
      })
      .catch((e) => {
        console.log('Error:', e);
      });
  }, []);

  if (!breeds.length) {
    return <Skeleton />;
  }

  return (
    <HomeContainerStyled>
      <HomeWrapperStyled>
        <TimeInput />
        <Breed />
      </HomeWrapperStyled>
      <StartButtonStyled onClick={handleClick}>
        <Paragragh fontWeight="500" fontSize="18px" color="#182747">
          Play
        </Paragragh>
      </StartButtonStyled>
    </HomeContainerStyled>
  );
};
