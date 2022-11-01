import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getBreed, getTime } from '../store/selectors';
import { CountDown } from './CountDown';
import { Card } from './Card';

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

  const [info, setInfo] = useState<Array<Info>>([]);
  console.log('info', info);

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

  return (
    <div>
      Game
      <CountDown />
      {info?.map((breed: any) => {
        return <Card breed={breed} key={breed.id} />;
      })}
    </div>
  );
};
