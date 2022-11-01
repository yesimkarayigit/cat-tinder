import React from 'react';

export const Skeleton = () => {
  return (
    <div className="container">
      <div className="post">
        <div className="line" />
        <div className="line" />
      </div>

      <div className="post">
        <div className="line" />
        <div className="line" />
      </div>

      <div className="post">
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};
