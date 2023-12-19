import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";
import classes from "../Products.module.css";

const Men = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className={classes.products}>
      {products.map((product) => {
        if (product.category === "men's clothing") {
          return <ProductCard key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default Men;
