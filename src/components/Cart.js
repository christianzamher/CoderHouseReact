import React from "react";
import { useContext , useState } from "react";
import { cartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "./Firebase"
import {  toast } from 'react-toastify';


const Cart = () => {
  const { cart, removeItem, clear, precioTotal } = useContext(cartContext);
  const [compra , setCompra] = useState([])
  
  let infoOrden = []

  const check = () => {
    clear();
  };

  const handleBuy = () => {
        
    const orden = {
        buyer : {
            nombre : "Christian",
            apellido : "Zamora Hermida",
            email : "czh1983@gmail.com"
        },
        items : cart,
        date : serverTimestamp(),
        total : precioTotal()
    }
    
    
    
    const ordenesCollection = collection(db,"ordenes")
    const pedido = addDoc(ordenesCollection,orden)
    
    infoOrden = orden
    pedido.then(res=>{setCompra({...infoOrden, id:res.id})})
    
    
  }
  
  
  


  
  
  
  return (
    <>
      

      {cart && cart.length ? (
        <>
          {cart.map((elemento) => (
            <div  key={elemento.producto.id}>
              <Card className="cardContainer" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{elemento.producto.nombre}</Card.Title>
                <Card.Img variant="top" src={elemento.producto.imagen} />
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
          
      
            <Card className="cardContainer"  style={{ width: "18rem" }}> 
               <Card.Body>
               <Card.Img variant="top" src="https://decorabonito.com/wp-content/uploads/elementor/thumbs/Gracias_por_su_compra_-oztn62hr7638bue839447utpb9gxdsiqspv975q6cg.png" />
                </Card.Body>
                <Card.Text> Usuario: </Card.Text>
                <Card.Text>Nombre: {compra.buyer?.nombre} </Card.Text>
                <Card.Text> Apellido: {compra.buyer?.apellido} </Card.Text>
                <Card.Text> Contacto: {compra.buyer?.email} </Card.Text>
                <Card.Text>Orden de Compra:  {compra.id} </Card.Text>
                <Card.Text>Total: ${compra.total} </Card.Text> 
                {compra.id ?
                  <Link to="/home" className="active"  onClick={() => {check()}}  >Compra Finalizada </Link>
                  :
               <Button  onClick={handleBuy}>Generar Compra</Button>}
               <Card.Text> ó: </Card.Text>
             <Button onClick={() => {check()}}> Borrar Carrito</Button>
            </Card>
         </>
      ) : (
        <Link className="emptyCard" to="/"><p >Carrito Vacio , volver a <b>Inicio</b></p></Link>
        )}

        
     
    </>
  );
};

export default Cart;
