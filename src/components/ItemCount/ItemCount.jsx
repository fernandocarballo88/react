import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function ItemCount( {stock, onAddToCart }) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="item-count-container"
      >
        <button className="item-count-button" onClick={handleClickSub}>
          -
        </button>
        <h2 className="count-text">{clickCount}</h2>
        <button className="item-count-button" onClick={handleClickAdd}>
          +
        </button>
      </div>
      <button className="item-count-button" onClick={() => onAddToCart(clickCount)}>
        <h4>Añadir al carrito</h4>
      </button>
    </div>
  );
}

export default ItemCount;