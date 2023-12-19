import React from "react";
import "./Products.module.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../features/productSlice";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        style={{ padding: "1rem" }}
        onChange={(e) =>
          dispatch(searchProducts({ searchText: e.target.value }))
        }
        placeholder="Search product"
      />
    </div>
  );
};

export default Search;
