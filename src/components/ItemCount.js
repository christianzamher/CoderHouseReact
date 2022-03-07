import React , {useState} from 'react';
// import { Card, Button, Stack } from "react-bootstrap"

const ItemCount = (props) => {
    
        const [numeroProducto ,setNumero] = useState(props.initial);
        
        
        const aumentar = ()=>{ if (numeroProducto < props.stock){
            setNumero(numeroProducto +1)
        }}

        const disminuir = ()=>{if (numeroProducto > 1){
            setNumero(numeroProducto - 1)
        }}

        
    return ( 
         <>
        
            <div class="container">
                <div className="card">
                    <div className="imgBx">
                        <img src="https://assets.codepen.io/4164355/shoes.png" alt=""></img>
                    </div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                <div className="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div className="color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                
                
                    <button    onClick={disminuir} disabled={numeroProducto === 1} >-</button>
                    <h3 className="h3Producto"  > Stock: {numeroProducto}</h3>
                    <button   onClick={aumentar} disabled= {numeroProducto === props.stock}>+</button>
                </div>
                    <button   onClick={props.OnAdd} >Agregar al Carrito</button>
                </div>
            </div>
        </div>
       
        </>
        
    );
}
 
export default ItemCount ;