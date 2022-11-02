import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getBreed, getTime } from '../store/selectors';
import { CountDown } from './CountDown';
import TinderCard from 'react-tinder-card';
import { Paragragh, PawStyled } from '../styles/styled';
import { setLiked, setDisliked, setSkipped } from '../store/actions';
import Paw from '../assets/paw.png';
import { Skeleton } from './Skeleton';
import { useNavigate } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_CAT_API_KEY;

interface Info {
  breeds: [];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const breed = useSelector(getBreed);
  const time = useSelector(getTime);

  const [lastDirection, setLastDirection] = useState<any>(null);
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
    setLastDirection(direction);

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

  // TODO
  if (time === 0) {
    navigate('/result');
  }

  if (!info.length) {
    return <Skeleton />;
  }

  return (
    <div>
      <CountDown />
      <div className="cardContainer">
        {info.map((cat: any) => (
          <TinderCard
            className="swipe"
            key={cat.id}
            onSwipe={(dir) => swiped(dir, cat.id)}
          >
            <div
              style={{ backgroundImage: 'url(' + cat.url + ')' }}
              className="card"
            >
              <h3>{cat.breeds[0].name}</h3>
              <div>
                <Paragragh fontSize="14px">
                  Affection: {getLevel(cat.breeds[0].affection_level)}
                </Paragragh>
                <Paragragh fontSize="14px">
                  Energy: {getLevel(cat.breeds[0].energy_level)}
                </Paragragh>
                <Paragragh fontSize="14px">
                  Intelligence: {getLevel(cat.breeds[0].intelligence)}
                </Paragragh>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection && <Paragragh>You swiped {lastDirection}</Paragragh>}
    </div>
  );
};
