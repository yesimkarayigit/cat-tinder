import React from 'react';
import Logo from '../assets/cat.png';
import CatEmoji from '../assets/cat-emoji.png';
import {
  LogoStyled,
  HeaderStyled,
  BrandStyled,
  EmojiStyled,
  Flex,
} from '../styles/styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="cat" />
      <Flex>
        <BrandStyled>Cat Tinder</BrandStyled>
        <EmojiStyled src={CatEmoji} alt="cat emoji" />
      </Flex>
    </HeaderStyled>
  );
};
