import React from "react";
import { Card, ListGroupItem,Nav } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  
  
  

 

  return (
    
      <Card bg="danger" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src={productos.imagen} />
        <Card.Body>
        {productos.descripcion}
          <Card.Text>
            <ListGroupItem> ${productos.precio} </ListGroupItem>
            <br></br>
          </Card.Text>
         
          <Link className="active" to={`/item/${productos.id}`}>+ Details</Link> 
        </Card.Body>
      </Card>
    
  );
};

export default Item;
