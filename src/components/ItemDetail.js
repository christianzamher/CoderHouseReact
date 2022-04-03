import React, { useContext, useState } from "react";
import { Card ,Button  } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import { cartContext } from "./CartContext";

const ItemDetail = ({ productos}) => {

  const [carrito, setCarrito] = useState(false)
  
  

  const item = productos
 const ProviderContexto = useContext(cartContext);

  
  
  
  
  const onAdd = (unidades)=>{
     setCarrito(!carrito)
     ProviderContexto.addItem(item, unidades)
           
     toast.success("Done !", {
      position: toast.POSITION.TOP_RIGHT
    });
 
   }
    
  return (
    
      <Card bg="dark" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src= {productos.imagen} />
        <Card.Body>
          {productos.descripcion}
          <Card.Text>
           $ {productos.precio}
            <br></br>
          </Card.Text>
          {carrito ? <Link to="/cart"  className="active" > Go to Cart</Link> :  <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}   /> }      
          <Link to="/home" className="active" >Home</Link>
        </Card.Body>
      </Card>
    
  );
};

export default ItemDetail;
