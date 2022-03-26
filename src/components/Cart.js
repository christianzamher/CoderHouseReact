import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import {Card,  Button } from "react-bootstrap";

const Cart = () => {
  const { cart, removeItem,clear } = useContext(cartContext);
 

  return (
    <>
      <h2>Carrito</h2>
      {cart.map((elemento) => (
        <div key={elemento.producto.id}>
          {/* <p>{elemento.producto.nombre}</p>
          <p>{elemento.producto.precio}</p>
          <Button variant="danger" onClick={()=>removeItem(elemento.producto.id)}>X</Button> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src= {`/${elemento.producto.imagen}`} />
            <Card.Body>
              <Card.Title>{elemento.producto.nombre}</Card.Title>
              <Card.Text>{elemento.producto.descripcion}</Card.Text>
              <Card.Text>{`$${elemento.producto.precio}`}</Card.Text>
              <Button variant="danger" onClick={()=>removeItem(elemento.producto.id)}>X</Button>
              <Button variant="danger" onClick={()=>clear(elemento.producto.id)}>Clear</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Cart;
