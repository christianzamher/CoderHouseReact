import { BsCart4 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import {Card,  Button } from "react-bootstrap";

function CartWidget() {

  const {cart} = useContext(cartContext);
  console.log(cart)
  
  

  
  

  
  return (
      <>
      
        
    <Link className="BsCart" to="/cart"><BsCart4 size="2em" color="black" />
    {cart.map((elemento) => (
        <div key={elemento.producto.id}>
          
              <Card.Text className="active">({elemento.cantidad}) </Card.Text>

           
        </div>
      ))}
    </Link>
    </>
  )
}

export default CartWidget