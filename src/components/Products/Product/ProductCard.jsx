import React from "react";
import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/productDetails/${product.id}`}>
      <div className={classes.card}>
        <div className={classes.productRatingContainer}>
          {product.rating.rate}⭐ | {product.rating.count}
        </div>
        <img src={product.image} height={200} width={200} />
        <h3 className={classes.title}>{product.title}</h3>
        <div className={classes.price}>
          ₹ {(product.price * 83.38).toFixed(2)}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
