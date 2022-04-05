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
    
      <Card id="cardId" className="cardContainer" bg="dark" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src= {productos.imagen} />
        <Card.Body>
          {productos.descripcion}
          <Card.Text>
           $ {productos.precio}
            <br></br>
          </Card.Text>
          {/* {carrito ? <Link to="/cart"  className="active" > Go to Cart</Link> :  <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}   /> }  */}
          {carrito ? 
          <Link to="/cart" class="cta">
          <span class="hover-underline-animation"> Go to Cart</span>
          <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
          <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
          </svg>
          </Link> :  <ItemCount stock={5} initial={1} onAdd= {onAdd} carrito={carrito}   /> }    
          
          <Link to="/home" className="active" >Home</Link>
        </Card.Body>
      </Card>
    
  );
};

export default ItemDetail;
