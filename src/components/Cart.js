import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "./Firebase"


const Cart = () => {
  const { cart, removeItem, clear, precioTotal } = useContext(cartContext);

  const check = () => {
    clear();
  };

  const handleClick = () => {
        
    const orden = {
        buyer : {
            nombre : "Christian",
            telefono : "555555555",
            email : "czh1983@gmail.com"
        },
        items : cart,
        date : serverTimestamp(),
        total : precioTotal()
    }
    const ordenesCollection = collection(db,"ordenes")
    const pedido = addDoc(ordenesCollection,orden)
    console.log(pedido)

    pedido
    .then(res=>{
        console.log(res.id)
    })

}



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
                  <Button variant="danger" onClick={() => removeItem(elemento.producto.id)}>X</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          <div>
            <Card className="cardContainer"  style={{ width: "18rem" }}> 
              <Card.Body>
              <Card.Title>Total Price: ${precioTotal()}</Card.Title>
              </Card.Body>
              <Button onClick={handleClick}>Just Buy!</Button>
              <Card.Text>or </Card.Text>
             <Button onClick={() => {check()}}> Clear All</Button>
            </Card>
          </div>
        </>
      ) : (
        <Link className="emptyCard" to="/"><p >Empty Cart, Go Home!</p></Link>
      )}
    </>
  );
};

export default Cart;
