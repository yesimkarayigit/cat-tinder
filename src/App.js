import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContainerStyled } from './styles';

import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Result } from './pages/Result';

import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </ContainerStyled>
    </ThemeProvider>
  );
}

export default App;
