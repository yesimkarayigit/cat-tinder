import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLiked, getDisliked, getSkipped } from '../store/selectors';
import { ReturnButtonStyled } from '../styles/styled';
import { useNavigate } from 'react-router-dom';
import { setBreed, setTime } from '../store/actions';
import { Paragragh } from '../styles/global.styled';

export const Result = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const liked = useSelector(getLiked);
  const disliked = useSelector(getDisliked);
  const skipped = useSelector(getSkipped);

  const handleClick = () => {
    navigate('/');

    dispatch(setBreed(''));
    dispatch(setTime(''));
  };

  // TODO
  return (
    <div>
      Result
      <p>Total photo: ?</p>
      <p>{liked.length}</p>
      <p>{disliked.length}</p>
      <p>{skipped.length}</p>
      <ReturnButtonStyled onClick={handleClick}>
        <Paragragh fontWeight="500" fontSize="1.2rem">
          Home
        </Paragragh>
      </ReturnButtonStyled>
    </div>
  );
};
