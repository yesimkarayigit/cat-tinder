import React from 'react';
import Logo from '../assets/cat.png';
import { LogoStyled, HeaderStyled } from '../styles/styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="cat" />
    </HeaderStyled>
  );
};
