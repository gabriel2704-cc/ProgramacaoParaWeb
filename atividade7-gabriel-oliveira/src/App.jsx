import Container from 'react-bootstrap/Container';
import Categoria from './componentes/telas/categoria/Categoria';
import './App.css';

function App() {
  return (
    <Container className="py-4">
      <header className="mb-4">
        <h1>Cadastro de Categorias do Restaurante</h1>
        <p className="text-muted">Gerencie as categorias dos pratos do restaurante.</p>
      </header>
      <Categoria />
    </Container>
  );
}

export default App;
