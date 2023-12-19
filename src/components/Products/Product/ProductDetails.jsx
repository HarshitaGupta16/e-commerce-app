import React, { useState } from "react";
import { useParams } from "react-router";
import useProductDetails from "../../../utils/useProductDetails";
import classes from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, displayGoToBag } from "../../../features/cartSlice";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { prodId } = useParams();
  const product = useProductDetails(prodId);
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  const currentItem = useSelector((state) =>
    state.cart.cartItems.filter((item) => item.id === Number(prodId))
  );

  console.log("cuee", currentItem);
  const readLessText = product?.description.substring(0, 25);

  const addToCartHandler = () => {
    // setQuantity((quantity) => quantity + 2);
    // setShowGoToBag(true);
    dispatch(addToCart({ productId: product.id }));
    // dispatch(displayGoToBag({ id: prodId, showGoToBag: true }));
  };

  return (
    <div className={classes.productContainer}>
      <div className={classes.subContainer}>
        <img src={product?.image} height={200} width={200} />
        <h1 className={classes.title}>{product?.title}</h1>
      </div>
      <div style={{ display: !readMore ? "flex" : "" }}>
        {!readMore ? <p>{readLessText}...</p> : <p>{product?.description}</p>}
        <p
          className={classes.readMore}
          onClick={() => setReadMore((readMore) => !readMore)}
        >
          {!readMore ? "Read More" : "Read Less"}
        </p>
      </div>
      <span>
        <b style={{ color: "#282c3f" }}>Price:</b> ₹{" "}
        {(product?.price * 83.38).toFixed(2)}
      </span>
      {!currentItem[0]?.showGoToBag ? (
        <button className={classes.addToCartBtn} onClick={addToCartHandler}>
          Add To Cart
        </button>
      ) : (
        <button className={classes.addToCartBtn}>
          <Link to={"/cart"} style={{ color: "white" }}>
            Go To Bag →
          </Link>
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
