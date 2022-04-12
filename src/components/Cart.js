import React from "react";
import { useContext , useState } from "react";
import { cartContext } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "./Firebase"


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
    pedido.then(res=>{console.log(compra)
      setCompra({...infoOrden, id:res.id})})
      
    
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
                  <Link to="/home" className="active"  >Compra Finalizada</Link>
                  :
               <Button onClick={handleBuy}>Generar Compra</Button>}
               <Card.Text> ó: </Card.Text>
             <Button onClick={() => {check()}}> Borrar Carrito</Button>
            </Card>
         </>
      ) : (
        <Link className="emptyCard" to="/"><p >Carrito Vacio , volver a <b>Inicio</b></p></Link>
        )}

        
      {/* <div className="form">
       <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
         <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder=" " />
         <div className="cut"></div>
          <label for="firstname" className="placeholder">Nombre</label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder=" " />
        <div class="cut"></div>
          <label  htmlFor="lastname" className="placeholder">  {compra.id}</label>
        </div>
        <div class="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
          <label for="email" className="placeholder">Email</label>
        </div>
        
      {compra.id ?
         <Link to="/home" className="active" >Compra Finalizada</Link>
         :
         <button type="text" className="submit" onClick={handleBuy}>Comprar</button>
        }
        </div> */}
    </>
  );
};

export default Cart;
