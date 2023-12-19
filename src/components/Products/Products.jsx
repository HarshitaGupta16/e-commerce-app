import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/productSlice";
import ProductCard from "./Product/ProductCard";
import classes from "./Products.module.css";
import Filter from "./Filter";
import Search from "./Search";
import { PRODUCT_API } from "../../utils/constants";
import Pagination from "../common/Pagination";
import Sort from "./Sort";

const Products = () => {
  const [page, setPage] = useState(1);

  const products = useSelector((state) => state.product.products);
  const filterBy = useSelector((state) => state.product.filterBy);
  const searchText = useSelector((state) => state.product.searchText);
  const sortBy = useSelector((state) => state.product.sortBy);
  const dispatch = useDispatch();

  const filteredProducts =
    filterBy === "all"
      ? products
      : products.filter((product) => product.category === filterBy);

  const searchedProducts =
    searchText === ""
      ? filteredProducts
      : filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );

  let totalProductsVisible = [...searchedProducts];
  if (sortBy === "asc") {
    totalProductsVisible = totalProductsVisible.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "desc") {
    totalProductsVisible = totalProductsVisible.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }

  console.log(totalProductsVisible);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(PRODUCT_API);
      console.log(data);
      dispatch(getProducts({ products: data }));
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const paginate = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(totalProductsVisible.length / 5) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "40px",
        }}
      >
        <Search />
        <Filter />
        <Sort />
      </div>
      <div className={classes.products}>
        {totalProductsVisible.slice(page * 5 - 5, page * 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalProducts={totalProductsVisible.length}
        paginate={paginate}
        page={page}
      />
    </>
  );
};

export default Products;
