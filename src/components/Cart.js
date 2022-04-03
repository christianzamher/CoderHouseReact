import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clear, precioTotal, addItem } =
    useContext(cartContext);

  const check = () => {
    clear();
  };

  return (
    <>
      

      {cart && cart.length ? (
        <>
          {cart.map((elemento) => (
            <div id="productos" key={elemento.producto.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={elemento.producto.imagen} />
                <Card.Body>
                  <Card.Title>{elemento.producto.nombre}</Card.Title>
                  <Card.Text>{elemento.producto.descripcion}</Card.Text>
                  <Card.Text>{`$${elemento.producto.precio}`}</Card.Text>
                  <Card.Text>Cantidad: {elemento.cantidad} </Card.Text>
                  <Card.Text>
                    SubTotal: ${elemento.cantidad * elemento.producto.precio}{" "}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeItem(elemento.producto.id)}
                  >
                    X
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Total Price: ${precioTotal()}</Card.Title>
              </Card.Body>
              <Button
                onClick={() => {
                  check();
                }}
              >
                <p>Just Buy!</p>
              </Button>
              <Card.Text>or </Card.Text>
              <Button
                onClick={() => {
                  check();
                }}
              >
                <p>Clear All</p>
              </Button>
            </Card>
          </div>
        </>
      ) : (
        <Link id="link" to="/">
          <p className="active">Empty Cart, Go Home!</p>
        </Link>
      )}
    </>
  );
};

export default Cart;
