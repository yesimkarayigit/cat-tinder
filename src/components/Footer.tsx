import React from 'react';
import Icon from '../assets/icon.svg';
import { IconStyled, Paragragh, FooterStyled } from '../styles/styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Paragragh>Made with</Paragragh>
      <IconStyled src={Icon} alt="heart icon" />
      <Paragragh>in Istanbul</Paragragh>
    </FooterStyled>
  );
};
