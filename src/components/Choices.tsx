import React from 'react';
import { Breed } from './Breed';
import CountDown from './CountDown';
import {
  ChoicesContainerStyled,
  ChoicesWrapperStyled,
  StartButtonStyled,
} from '../styles/styled';

import { connect } from 'react-redux';
import { startGame } from '../store/actions';

const Choices = (props: any) => {
  const handleClick = () => {
    props.startGame(true);
  };

  return (
    <ChoicesContainerStyled>
      <ChoicesWrapperStyled>
        <CountDown />
        <Breed />
      </ChoicesWrapperStyled>
      <StartButtonStyled onClick={handleClick}>
        Start the game
      </StartButtonStyled>
    </ChoicesContainerStyled>
  );
};

export default connect(null, { startGame })(Choices);
