import { NavLink, Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuPublico = () => (
  <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Rotas com React</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-publico" />
        <Navbar.Collapse id="menu-publico">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Início</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </>
);

export default MenuPublico;
