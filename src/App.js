import { Header } from './components/Header.tsx';
import Choices from './components/Choices.tsx';
import { ContainerStyled } from './styles/styled';

function App() {
  return (
    <ContainerStyled>
      <Header />
      <Choices />
    </ContainerStyled>
  );
}

export default App;
