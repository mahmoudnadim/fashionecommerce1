import React, { useContext } from "react";
import "./AddQuantity.css"

export default function AddQuantity(props) {
  const itemQuantity = props.cart.filter((item) => {
    return item.id === props.id;
  });
  const setCart = props.setCart

  const removeItem = (targetItem) => {
  setCart(prevCart => {
  const index = prevCart.findIndex(item => item.id === targetItem);
  if (index !== -1) {
    const newCart = [...prevCart];
    newCart.splice(index, 1);
    return newCart;
  }
  return prevCart;
});
};

  return (
      <div className="quantityContainer flex">
        <button
          onClick={() => removeItem(props.id)}
          className="quantityBtn bg-gray-200 rounded-tl-lg rounded-bl-lg hover:bg-gray-300 text-lg w-1/2"
        >
          {" "}
          -{" "}
        </button>
        <input
          type="text"
          value={itemQuantity.length}
          readOnly
          className="w-12 text-center border"
        />
        <button
          className="quantityBtn bg-gray-200 rounded-tr-lg rounded-br-lg hover:bg-gray-300 text-lg w-1/2 AddQuantity"
          onClick={props.onAdd}
        >
          {" "}
          +{" "}
        </button>
      </div>
  );
}
