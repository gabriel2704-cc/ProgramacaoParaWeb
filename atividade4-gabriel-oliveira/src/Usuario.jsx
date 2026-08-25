import Container from 'react-bootstrap/Container';

const Usuario = () => (
  <Container className="py-5">
    <h1>Dados do usuário</h1>
    <p className="lead">Nome: {localStorage.getItem('usuario')}</p>
  </Container>
);

export default Usuario;
