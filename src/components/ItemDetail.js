import React, { useState } from "react";
import { Card ,Button  } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';

const ItemDetail = ({ wishList }) => {
  const { nombre, precio, descripcion, imagen } = wishList;
  
  const [carrito, setCarrito] = useState(false)
  
  const onAdd = ()=>{
     setCarrito(!carrito)
     toast.success("Compra Exitosa !", {
      position: toast.POSITION.TOP_RIGHT
    });

   }

    
  

  return (
    <>
      <Card bg="dark" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src= {`/${imagen}`} />
        <Card.Body>
          {descripcion}
          <Card.Text>
           $ {precio}
            <br></br>
          </Card.Text>
          {carrito ? <Link to="/carrito" className="active" > Go to Cart</Link> :  <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}  /> }      
          <Link to="/home" className="active" >Home</Link>

        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
