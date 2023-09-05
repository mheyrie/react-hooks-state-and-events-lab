import React, {useState} from "react";

function Item({ name, category }) {

//Use state declaration
  const [inCart, setInCart] = useState(false)
  const [addCart, setAddCart] = useState(true)

  function handleCartStock() {
    setInCart(!inCart)
    setAddCart(!addCart)
  }

  const cart = inCart ? "Remove from Cart" : "Add to Cart"
  return (
    <div>
    <li className={ inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ addCart ? "add" : "remove"} onClick={handleCartStock}>{cart}</button>
    </li>
    </div>
  );
}

export default Item;
