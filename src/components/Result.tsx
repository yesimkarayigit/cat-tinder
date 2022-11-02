import React from 'react';
import { useSelector } from 'react-redux';
import { getLiked, getDisliked, getSkipped } from '../store/selectors';
import { Paragragh, ReturnButtonStyled } from '../styles/styled';
import { useNavigate } from 'react-router-dom';

export const Result = () => {
  const navigate = useNavigate();

  const liked = useSelector(getLiked);
  const disliked = useSelector(getDisliked);
  const skipped = useSelector(getSkipped);

  const handleClick = () => {
    navigate('/');
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
        <Paragragh fontWeight="500" fontSize="18px">
          Home
        </Paragragh>
      </ReturnButtonStyled>
    </div>
  );
};
