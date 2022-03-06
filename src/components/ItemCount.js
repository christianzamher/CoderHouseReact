import React , {useState} from 'react';
import { Card, Button, Stack } from "react-bootstrap"

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
                <Card border="primary" bg="warning" style={{ width: '18rem' }}>
                
                <Card.Body>
                
                <Card.Title>Producto</Card.Title>
                <Card.Img variant="top" src="https://images.emojiterra.com/google/android-10/512px/1f6d2.png" />
                <Card.Text>
                            proximamente productos en venta
                </Card.Text>
                <Stack className= "btns" >
                <Button  variant="primary" size="sm"  onClick={disminuir} disabled={numeroProducto === 1} >-</Button>
                <h3 > {numeroProducto}</h3>
                <Button  variant="primary" size="sm" onClick={aumentar} disabled= {numeroProducto === props.stock}>+</Button>
 
                </Stack>
                
                 
                </Card.Body>
                </Card>

                
        
       
        </>
        
    );
}
 
export default ItemCount ;