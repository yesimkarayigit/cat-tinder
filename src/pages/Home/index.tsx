import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getBreed, getBreeds, getTime } from '../../store/selectors';
import { finishGame, setBreeds, startGame } from '../../store/actions';
import { Breed } from '../../components/Breed';
import { TimeInput } from '../../components/TimeInput';
import { Skeleton } from '../../components/Skeleton';
import {
  HomeContainerStyled,
  HomeWrapperStyled,
  StartButtonStyled,
} from './styled';
import { Paragragh } from '../../styles';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const breeds = useSelector(getBreeds);
  const breed = useSelector(getBreed);
  const time = useSelector(getTime);

  const handleClick = () => {
    if (parseInt(time) && breed) {
      navigate('/game');
    }

    dispatch(startGame(true));
    dispatch(finishGame(false));
  };

  useEffect(() => {
    // dispatch(fetchBreeds())
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
        <Paragragh fontWeight="500" fontSize="1.2rem" color="#182747">
          Play
        </Paragragh>
      </StartButtonStyled>
    </HomeContainerStyled>
  );
};
