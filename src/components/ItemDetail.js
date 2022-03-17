import React from "react";
import { Card  } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ wishList }) => {
  const { nombre, precio, descripcion, imagen } = wishList;

  return (
    <>
      <Card bg="dark" text="white" border="warning" style={{ width: "30rem" }}>
        <Card.Title>{nombre}</Card.Title>
        <Card.Img variant="top" className="imgSet" src= {`/${imagen}`} />
        <Card.Body>
          {descripcion}
          <Card.Text>
             ${precio}
            <br></br>
          </Card.Text>
          <ItemCount stock={5} initial={1} />
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
