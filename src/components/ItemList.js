import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
  console.log(productos);
  return (
    <>
      <div className="itemContainer">
        {productos.map((productos) => (
          <Item key={productos.id} productos={productos} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
