import React from "react";
import { Card, ListGroupItem,Nav } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ cardList }) => {
  const { nombre, precio, descripcion, imagen , id} = cardList;

  const onAdd = ()=>{
    console.dir("click")
  }

  return (
    <>
      <Card bg="dark" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src={`/${imagen}`} />
        <Card.Body>
        {descripcion}
          <Card.Text>
            <ListGroupItem> ${precio} </ListGroupItem>
            <br></br>
          </Card.Text>
          <ItemCount stock={5} initial={1} onAdd= {onAdd}  />
          <Link className="active" to={`/item/${id}`}>Mas detalles</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
