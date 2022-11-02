import React from 'react';
import Icon from '../assets/icon.svg';
import { Paragragh } from '../styles/global.styled';
import { IconStyled, FooterStyled } from '../styles/styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Paragragh fontWeight="600" color="#4C6793">
        Made with
      </Paragragh>
      <IconStyled src={Icon} alt="heart icon" />
      <Paragragh fontWeight="600" color="#4C6793">
        in Istanbul
      </Paragragh>
    </FooterStyled>
  );
};
