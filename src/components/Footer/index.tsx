import React from 'react';
import { IconStyled, FooterStyled } from './styled';
import { Paragragh } from '../../styles';
import Icon from '../../assets/icon.svg';
import { theme } from '../../theme';

export const Footer = () => {
  return (
    <FooterStyled>
      <Paragragh fontWeight={theme.fontWeights.semiBold} color="#4C6793">
        Made with
      </Paragragh>
      <IconStyled src={Icon} alt="heart icon" />
      <Paragragh fontWeight={theme.fontWeights.semiBold} color="#4C6793">
        in Istanbul
      </Paragragh>
    </FooterStyled>
  );
};
