import React , {useState} from 'react';
import {Button} from "react-bootstrap"

function ItemCount ({stock,initial,onAdd}) {
    
        const [numeroProducto ,setNumero] = useState(initial);
        
        
        const aumentar = ()=>{ if (numeroProducto < stock){
            setNumero(numeroProducto +1)
        }}

        const disminuir = ()=>{if (numeroProducto > 1){
            setNumero(numeroProducto - 1)
        }}

       
        
    return ( 
        <>
                    <h5 className="h3Producto"  > Stock: {numeroProducto}</h5>
                    <div className= "divContainer">
                    <Button variant="info" size="sm"   onClick={disminuir} disabled={numeroProducto === 1} >-</Button>{' '}
                    <Button variant="success"   onClick={onAdd} >Agregar al Carrito</Button>{' '}
                    <Button variant="info" size="sm"  onClick={aumentar} disabled= {numeroProducto === stock}>+</Button>{' '}
                    </div>
           
              
        </>
        
    );
}
 
export default ItemCount ;