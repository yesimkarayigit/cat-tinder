import React from 'react';
import { setBreed, setTime } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/cat.png';
import CatEmoji from '../assets/cat-emoji.png';
import {
  LogoStyled,
  HeaderStyled,
  BrandStyled,
  EmojiStyled,
} from '../styles/styled';
import { Flex } from '../styles/global.styled';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    navigate('/');

    dispatch(setBreed('abys'));
    dispatch(setTime(''));
  };

  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="cat" onClick={redirect} />
      <Flex>
        <BrandStyled>Cat Tinder</BrandStyled>
        <EmojiStyled src={CatEmoji} alt="cat emoji" />
      </Flex>
    </HeaderStyled>
  );
};
