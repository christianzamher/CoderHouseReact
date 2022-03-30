import { BsCart4 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import {Card,  Button } from "react-bootstrap";

function CartWidget() {

  const {cart, itemTotales} = useContext(cartContext);
 
   
  return (
     

     <>
        {itemTotales()>0 ?<Link className="BsCart active" to="/cart"><BsCart4 size="2em" color="black" />
           
                <div>({itemTotales()})</div>
            
            </Link>:null}
        </>
    
  )
}

export default CartWidget