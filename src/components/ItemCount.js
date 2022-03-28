import React , {useState ,useContext} from 'react';
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import ItemDetail from './ItemDetail';

function ItemCount ({stock,initial,onAdd, carrito}) {
    
        const [numeroProducto ,setNumero] = useState(initial);
        
        
        const aumentar = ()=>{ if (numeroProducto < stock){
            setNumero(numeroProducto +1)
        }}

        const disminuir = ()=>{if (numeroProducto > 1){
            setNumero(numeroProducto - 1)
        }}

        const handleclick = ()=>{
            onAdd(numeroProducto)
        
        }

       
        
    return ( 
        <>
                    <h5 className="h3Producto"  > Stock: {numeroProducto}</h5>
                    <div className= "divContainer">
                    <Button variant="info" size="sm"   onClick={disminuir} disabled={numeroProducto === 1} >-</Button>{' '}
                    <Button variant="success"   onClick={handleclick} >{!carrito ? 'Buy' : 'Go to Cart'}</Button>{' '}
                    <Button variant="info" size="sm"  onClick={aumentar} disabled= {numeroProducto === stock}>+</Button>{' '}
                    
                    
                    </div>
           
              
        </>
        
    );
}
 
export default ItemCount ;