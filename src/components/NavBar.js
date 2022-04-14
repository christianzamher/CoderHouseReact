import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


function NavBar() {
   
    
   
   
    return (
        
        
        <Navbar bg="white" expand="lg">
            <Container className="pb-6N" >
                <Navbar.Brand as={Link} to="/Home">FooderScript</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
                        <NavDropdown title="Menues" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/bebida">Bebidas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/hamburguesa">Hamburguesas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/milanesas">Milanesas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/pizza">Pizzas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/desayuno">Desayunos y Meriendas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/postre">Postres</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
               
            </Container>
           </Navbar>
        
    )
}




export default NavBar