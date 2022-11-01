import React from 'react';
import { Header } from './components/Header.tsx';
import { Home } from './components/Home.tsx';
import { ContainerStyled } from './styles/styled';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Game } from './components/Game';

function App() {
  return (
    <ContainerStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </ContainerStyled>
  );
}

export default App;
