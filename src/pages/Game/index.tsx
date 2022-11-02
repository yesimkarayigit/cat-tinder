import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TinderCard from 'react-tinder-card';

import { getBreed, getDone, getTime } from '../../store/selectors';
import { setLiked, setDisliked, setSkipped } from '../../store/actions';
import { Skeleton } from '../../components/Skeleton';
import { CountDown } from '../../components/CountDown';
import {
  Card,
  CardContainer,
  CardTitle,
  FinishButtonStyled,
  InfoBox,
  PawStyled,
} from './styled';
import { Paragragh } from '../../styles';
import Paw from '../../assets/paw.png';
import { theme } from '../../theme';

const API_KEY = process.env.REACT_APP_CAT_API_KEY;

interface Info {
  breeds: [];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const breed = useSelector(getBreed);
  const time = useSelector(getTime);
  const isDone = useSelector(getDone);

  const [info, setInfo] = useState<Array<Info>>([]);

  useEffect(() => {
    if (!time && !breed) {
      return;
    }

    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=50&breed_ids=${breed}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
        }
      )
      .then((response) => {
        setInfo(response?.data);
      })
      .catch((e) => {
        console.log('Error:', e);
      });
  }, []);

  const swiped = (direction: string, id: string) => {
    if (direction === 'right') {
      dispatch(setLiked(id));
    }

    if (direction === 'left') {
      dispatch(setDisliked(id));
    }

    if (direction === 'down') {
      dispatch(setSkipped(id));
    }
  };

  const getLevel = (level: number) => {
    return [...Array(level).keys()].map((paw) => {
      return <PawStyled key={paw} src={Paw} />;
    });
  };

  const finishGame = () => {
    navigate('/result');
  };

  useEffect(() => {
    if (isDone) {
      navigate('/result');
    }
  }, [isDone]);

  if (!info.length) {
    return <Skeleton />;
  }

  return (
    <div>
      <CountDown />
      <CardContainer>
        {info.map((cat: any) => (
          <TinderCard
            className="swipe"
            key={cat.id}
            onSwipe={(dir) => swiped(dir, cat.id)}
            preventSwipe={['up']}
          >
            <Card
              style={{ backgroundImage: 'url(' + cat.url + ')' }}
              className="card"
            >
              <CardTitle>{cat.breeds[0].name}</CardTitle>
              <InfoBox>
                <Paragragh fontSize={theme.fontSizes.mini}>
                  Affection: {getLevel(cat.breeds[0].affection_level)}
                </Paragragh>
                <Paragragh fontSize={theme.fontSizes.mini}>
                  Energy: {getLevel(cat.breeds[0].energy_level)}
                </Paragragh>
                <Paragragh fontSize={theme.fontSizes.mini}>
                  Intelligence: {getLevel(cat.breeds[0].intelligence)}
                </Paragragh>
              </InfoBox>
            </Card>
          </TinderCard>
        ))}
      </CardContainer>
      <FinishButtonStyled onClick={finishGame}>
        <Paragragh fontWeight={theme.fontWeights.medium}>
          See the results
        </Paragragh>
      </FinishButtonStyled>
    </div>
  );
};
