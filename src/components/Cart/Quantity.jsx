import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../features/cartSlice";

const Quantity = ({ quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        background: "lightgray",
        width: 60,
        marginTop: 10,
      }}
    >
      <button
        onClick={() => dispatch(changeQuantity({ type: "DECREMENT", id: id }))}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          marginRight: 5,
          backgroundColor: "gray",
        }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => dispatch(changeQuantity({ type: "INCREMENT", id: id }))}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          marginLeft: 5,
          backgroundColor: "gray",
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
