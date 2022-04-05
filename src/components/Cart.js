import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {addDoc, collection, serverTimestamp} from "firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clear, precioTotal } =
    useContext(cartContext);

  const check = () => {
    clear();
  };

  return (
    <>
      

      {cart && cart.length ? (
        <>
          {cart.map((elemento) => (
            <div  key={elemento.producto.id}>
              <Card className="cardContainer" style={{ width: "18rem" }}>
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
            <Card className="cardContainer"  style={{ width: "18rem" }}> 
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
        <Link className="emptyCard" to="/">
          <p >Empty Cart, Go Home!</p>
        </Link>
      )}
    </>
  );
};

export default Cart;
