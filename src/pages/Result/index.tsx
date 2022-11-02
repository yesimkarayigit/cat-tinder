import React from 'react';
import { useSelector } from 'react-redux';
import { getLiked, getDisliked, getSkipped } from '../../store/selectors';
import { ReturnButton } from '../../components/ReturnButton';
import { Paragragh } from '../../styles';

export const Result = () => {
  const liked = useSelector(getLiked);
  const disliked = useSelector(getDisliked);
  const skipped = useSelector(getSkipped);

  const totalCards = liked.length + disliked.length + skipped.length;

  if (!totalCards) {
    return (
      <div>
        <Paragragh fontSize="1.5rem" fontWeight="600" margin="0 0 60px 0">
          You have not decided on a cat. We are sad! &#x1F622;
        </Paragragh>
        <ReturnButton />
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
      <ReturnButton />
    </div>
  );
};
