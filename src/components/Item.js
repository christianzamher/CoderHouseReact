import React from 'react'
import {Card,ListGroupItem} from "react-bootstrap"
import ItemCount from './ItemCount'


const Item = ({product}) => {
    const {nombre,precio, descripcion,imagen} = product
    return (
    <>
    
    
  

    <Card bg="dark" text="white"  border="warning" style={{ width: '18rem' }}>
    <Card.Title>{nombre}</Card.Title>
    <Card.Img variant="top" className="imgSet" src={imagen} alt="" />
    <Card.Body >{descripcion}<Card.Text>
    <ListGroupItem> ${precio}</ListGroupItem>
    </Card.Text>
    <ItemCount stock={5} initial={1}  /> 
    </Card.Body>
    </Card>
    
 

       
    </>
  )
}

export default Item