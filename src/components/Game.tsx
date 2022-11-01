import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getBreed, getTime } from '../store/selectors';
import { CountDown } from './CountDown';
import TinderCard from 'react-tinder-card';
import { Paragragh } from '../styles/styled';

const API_KEY = process.env.REACT_APP_CAT_API_KEY;

interface Info {
  breeds: [];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const Game = () => {
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
        `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${breed}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
          },
        }
      )
      .then((response) => {
        console.log('response?.data', response?.data);
        setInfo(response?.data);
      })
      .catch((e) => {
        console.log('Error:', e);
      });
  }, []);

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: any) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div>
      Game
      <CountDown />
      <div className="cardContainer">
        {info.map((cat: any) => (
          <TinderCard
            className="swipe"
            key={cat.id}
            onSwipe={(dir) => swiped(dir, cat.id)}
            onCardLeftScreen={() => outOfFrame(cat.id)}
          >
            <div
              style={{ backgroundImage: 'url(' + cat.url + ')' }}
              className="card"
            >
              <h3>{cat.breeds[0].name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection && <Paragragh>You swiped {lastDirection}</Paragragh>}
    </div>
  );
};
