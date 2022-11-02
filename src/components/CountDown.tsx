import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../store/selectors';
import { finishGame } from '../store/actions';
import { CountDownBoxStyled } from '../styles/styled';
import { Paragragh } from '../styles/global.styled';

export const CountDown = () => {
  const time = useSelector(getTime);
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(time % 60);
  const [minutes, setMinutes] = useState(Math.floor(time / 60));

  const updateTime = () => {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0);
      setMinutes(0);
      dispatch(finishGame(true));
    } else {
      if (seconds == 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  };

  useEffect(() => {
    setSeconds(time % 60);
    setMinutes(Math.floor(time / 60));
  }, [time]);

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  const countDownText =
    minutes + seconds <= 0 ? 'Game is over' : `${minutes}:${seconds}`;
  const isLastTenSeconds = minutes === 0 && seconds < 10;

  return (
    <CountDownBoxStyled
      backgroundColor={isLastTenSeconds ? '#F96666' : '#e1ffb1'}
    >
      <Paragragh
        fontSize="1.25rem"
        color={isLastTenSeconds ? '#182747' : '#4C6793'}
        fontWeight="600"
      >
        {countDownText}
      </Paragragh>
    </CountDownBoxStyled>
  );
};
