import React from "react";
import Item from "./Item";

function ItemList({ wishList }) {
  return (
    <>
      <div className="itemContainer">
        {wishList.map((product) => (
          <Item key={product.id} cardList={product} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
