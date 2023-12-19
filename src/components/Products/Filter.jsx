import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsBy } from "../../features/productSlice";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => dispatch(filterProductsBy({ category: e.target.value }))}
      style={{ padding: "15px", width: "200px" }}
    >
      Filter By
      <option value="all">All</option>
      <option value="Men's Clothing">Men's Clothing</option>
      <option value="Women's Clothing">Women's Clothing</option>
      <option value="Jewelery">Jewellery</option>
      <option value="Electronics">Electronics</option>
    </select>
  );
};

export default Filter;
