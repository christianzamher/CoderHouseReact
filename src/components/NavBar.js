import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="pb-5" >
                <Navbar.Brand href="#home">Coder-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Partners</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}




export default NavBar