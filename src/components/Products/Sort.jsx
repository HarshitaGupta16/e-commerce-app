import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../features/productSlice";

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 10 }}>
      <span style={{ marginRight: 10 }}>Sort</span>
      <button
        onClick={() => dispatch(sortProducts({ sortBy: "asc" }))}
        style={{
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          marginRight: 5,
        }}
      >
        ↑
      </button>
      <button
        onClick={() => dispatch(sortProducts({ sortBy: "desc" }))}
        style={{
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          marginRight: 5,
        }}
      >
        ↓
      </button>
    </div>
  );
};

export default Sort;
