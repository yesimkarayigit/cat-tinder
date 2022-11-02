import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputStyled } from './styled';
import { setTime } from '../../store/actions';
import { getTime } from '../../store/selectors';
import { Box, Paragragh } from '../../styles';
import { theme } from '../../theme';

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
      <Paragragh fontWeight={theme.fontWeights.semiBold}>Time</Paragragh>
      <InputStyled type="text" value={time || ''} onChange={handleChangeTime} />
    </Box>
  );
};
