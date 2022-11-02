import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTime } from '../../store/selectors';
import { finishGame } from '../../store/actions';
import { CountDownBoxStyled } from './styled';
import { Paragragh } from '../../styles';
import { theme } from '../../theme';

export const CountDown = () => {
  const time = useSelector(getTime);
  const dispatch = useDispatch();

  const timeNumber = parseInt(time);

  const [seconds, setSeconds] = useState(timeNumber % 60);
  const [minutes, setMinutes] = useState(Math.floor(timeNumber / 60));

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
    setSeconds(timeNumber % 60);
    setMinutes(Math.floor(timeNumber / 60));
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
      backgroundColor={
        isLastTenSeconds ? `${theme.colors.danger}` : `${theme.colors.tidal}`
      }
    >
      <Paragragh
        fontSize={theme.fontSizes.medium}
        color={
          isLastTenSeconds
            ? `${theme.colors.bigStone}`
            : `${theme.colors.kashmirBlue}`
        }
        fontWeight={theme.fontWeights.semiBold}
      >
        {countDownText}
      </Paragragh>
    </CountDownBoxStyled>
  );
};
