import React from 'react';
import { useSelector } from 'react-redux';
import { getLiked, getDisliked, getSkipped } from '../store/selectors';

export const Result = () => {
  const liked = useSelector(getLiked);
  const disliked = useSelector(getDisliked);
  const skipped = useSelector(getSkipped);

  // TODO
  return (
    <div>
      Result
      <p>Total photo: ?</p>
      <p>{liked}</p>
      <p>{disliked}</p>
      <p>{skipped}</p>
      <p>Restart button</p>
    </div>
  );
};
