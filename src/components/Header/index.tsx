import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBreed, setTime } from '../../store/actions';
import { LogoStyled, HeaderStyled, BrandStyled, EmojiStyled } from './styled';
import { Flex } from '../../styles';
import Logo from '../../assets/cat.png';
import CatEmoji from '../../assets/cat-emoji.png';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    navigate('/');

    dispatch(setBreed('abys'));
    dispatch(setTime(0));
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
