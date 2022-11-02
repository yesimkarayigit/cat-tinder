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

    dispatch(setBreed('abys'));
    dispatch(setTime(''));
  };

  const totalCards = liked.length + disliked.length + skipped.length;

  if (!totalCards) {
    return (
      <div>
        <Paragragh fontSize="1.5rem" fontWeight="600" margin="0 0 60px 0">
          You never made a decision for a cat. We are sad! &#x1F622;
        </Paragragh>
        <ReturnButtonStyled onClick={handleClick}>
          <Paragragh fontWeight="500" fontSize="1.2rem">
            Home
          </Paragragh>
        </ReturnButtonStyled>
      </div>
    );
  }

  return (
    <div>
      <Paragragh fontSize="2rem" fontWeight="600" margin="0 0 16px 0">
        Results
      </Paragragh>
      <Paragragh margin="0 0 10px 0" color="#182747" fontWeight="500">
        You saw a total of {totalCards} cats! &#x1F49B;
      </Paragragh>
      <Paragragh margin="0 0 10px 0" color="#182747" fontWeight="500">
        The number of cats you like: {liked.length}
      </Paragragh>
      <Paragragh margin="0 0 10px 0" color="#182747" fontWeight="500">
        The number of cats you dislike: {disliked.length}
      </Paragragh>
      <Paragragh margin="0 0 60px 0" color="#182747" fontWeight="500">
        The number of cats you skip: {skipped.length}
      </Paragragh>
      <ReturnButtonStyled onClick={handleClick}>
        <Paragragh fontWeight="500" fontSize="1.2rem">
          Home
        </Paragragh>
      </ReturnButtonStyled>
    </div>
  );
};
