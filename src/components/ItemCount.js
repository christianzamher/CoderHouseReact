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
                <div class="card">
                    <div class="imgBx">
                        <img src="https://assets.codepen.io/4164355/shoes.png" alt=""></img>
                    </div>
                <div class="contentBx">
                    <h2>Nike Shoes</h2>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div class="color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                
                
                <button  variant="primary" size="sm"  onClick={disminuir} disabled={numeroProducto === 1} >-</button>
                <h3 className="h3Producto"  > Stock: {numeroProducto}</h3>
                <button  variant="primary" size="sm" onClick={aumentar} disabled= {numeroProducto === props.stock}>+</button>

                  
                 </div>
                <a href="google.com">Buy Now</a>
                </div>
            </div>
        </div>
       
        </>
        
    );
}
 
export default ItemCount ;