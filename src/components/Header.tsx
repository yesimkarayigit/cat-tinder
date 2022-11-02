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
  Flex,
} from '../styles/styled';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    navigate('/');

    dispatch(setBreed(''));
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
