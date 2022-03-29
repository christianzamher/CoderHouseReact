import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import React, { useContext, useState } from "react";

function NavBar() {
   
    const {cart} = useContext(cartContext);
    console.log(cart)
   
    return (
        <>
        
        <Navbar bg="light" expand="lg">
            <Container className="pb-6N" >
                <Navbar.Brand as={Link} to="/Home">Coder-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/hamburguesa">Burguers</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/bebida">Drinks</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/milanesas">Milanesas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/desayuno">Breackfasts & Brunches</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/postre">Dessert</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
                {/* {carrito ? <Link to="/cart"  className="active" > Go to Cart</Link> :  <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}   /> } */}
            </Container>
           </Navbar>
        
         </>
    )
}




export default NavBar