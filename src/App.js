import { Header } from './components/Header.tsx';
import Choices from './components/Choices.tsx';
import { ContainerStyled } from './styles/styled';
import { Footer } from './components/Footer';

function App() {
  return (
    <ContainerStyled>
      <Header />
      <Choices />
      <Footer />
    </ContainerStyled>
  );
}

export default App;
