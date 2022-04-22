import React from "react";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
    
   return (
    
      <Card className="cardContainer" bg="danger" text="white" border="warning" style={{ width: "20rem" }}>
        <Card.Title>{productos.nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src={productos.imagen} />
        <Card.Body> {productos.descripcion}
        <Card.Text>
        <Card.Title className="borderPrice">  ${productos.precio} </Card.Title>
        <br></br>
        </Card.Text>
        <Link className="active" to={`/item/${productos.id}`}>+ Info</Link> 
        </Card.Body>
      </Card>
    
  );
};

export default Item;
