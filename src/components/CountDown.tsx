import React, { useEffect, useState } from 'react';
import { InputStyled } from '../styles/styled';
import { connect } from 'react-redux';

const CountDown = (props: any) => {
  console.log('props', props);

  const [time, setTime] = useState('');
  const [countDown, setCountDown] = useState('00:00');
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleChangeTime = (e: any) => {
    const regexForNumbers = /^\d{0,3}$/;

    if (e.target.value === '' || regexForNumbers.test(e.target.value)) {
      setTime(e.target.value);
    }
  };

  const onBlur = (e: any) => {
    const totalSeconds = e.target.value;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    setCountDown(`${minutes}:${seconds}`);
    setSeconds(seconds);
    setMinutes(minutes);
  };

  const updateTime = () => {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0);
      setMinutes(0);
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
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  const text =
    minutes + seconds <= 0 ? 'time is over' : `time: ${minutes}:${seconds}`;

  return (
    <div>
      <InputStyled
        type="text"
        value={time}
        onBlur={onBlur}
        onChange={handleChangeTime}
      />
      <p>Play Time: {countDown}</p>
      <p>{text}</p>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isStarted: state.isStarted,
  };
};

export default connect(mapStateToProps)(CountDown);
