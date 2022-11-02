import React from 'react';
import { IconStyled, FooterStyled } from './styled';
import { Paragragh } from '../../styles';
import Icon from '../../assets/icon.svg';

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
