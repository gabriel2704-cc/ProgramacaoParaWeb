import { NavLink, Outlet } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" exact="true" to="/">Rotas com react-router</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link active" exact="true" to="/">Home</NavLink>                           
                            <NavDropdown title="Ações" id="basic-nav-dropdown">
                                <NavLink className="dropdown-item" exact="true" to="/rotas">Rotas</NavLink> 
                                <NavLink className="dropdown-item" exact="true" 
                                to="/rotas/2025">Rotas com parâmetros</NavLink>
                            </NavDropdown>                
                            <NavLink className="nav-link active" exact="true" to="/sobre">Sobre...</NavLink> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Menu;