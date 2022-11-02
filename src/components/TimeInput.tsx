import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputStyled, Paragragh } from '../styles/styled';
import { setTime } from '../store/actions';
import { getTime } from '../store/selectors';

export const TimeInput = () => {
  const dispatch = useDispatch();
  const time = useSelector(getTime);

  const handleChangeTime = (e: any) => {
    const regexForNumbers = /^\d{0,3}$/;

    if (e.target.value === '' || regexForNumbers.test(e.target.value)) {
      dispatch(setTime(e.target.value));
    }
  };

  return (
    <Box margin="0 0 10px 0">
      <Paragragh fontWeight="600">Time</Paragragh>
      <InputStyled type="text" value={time || ''} onChange={handleChangeTime} />
    </Box>
  );
};
