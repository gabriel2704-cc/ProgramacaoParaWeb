import { NavLink, Outlet, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import withAuth from './withAuth';

const MenuPrivado = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('usuario');
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/privado">Área privada</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-privado" />
          <Navbar.Collapse id="menu-privado">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/privado/imc">Calculadora IMC</Nav.Link>
              <Nav.Link as={NavLink} to="/privado/usuario">Usuário: {localStorage.getItem('usuario')}</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-outline-light" onClick={logout}>Logout</button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default withAuth(MenuPrivado);
