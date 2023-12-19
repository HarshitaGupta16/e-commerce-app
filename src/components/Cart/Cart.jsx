import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { removeFromCart } from "../../features/cartSlice";
import Quantity from "./Quantity";

const Cart = () => {
  const cartObject = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  let cartItems = [];
  cartObject.map((obj) => {
    let product = Object.assign(
      {},
      ...products.filter((product) => product.id === obj.id)
    );

    // console.log(product);
    product["quantity"] = obj.quantity;
    cartItems.push(product);
  });
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className={classes.emptyText}>
          <span>Your cart feels so light.. </span>
          <span>Add something to your cart 🛒</span>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className={classes.card}>
              <div style={{ marginRight: 20 }}>
                <img src={item.image} height={150} />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 408,
                  }}
                >
                  <h3 className={"title"}>{item.title}</h3>
                  <button
                    className={classes.removeBtn}
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    🗑
                  </button>
                </div>
                <p>{item.description?.substring(0, 50)}...</p>
                <p>₹ {(item.price * 83.38).toFixed(2)}</p>
                <Quantity quantity={item.quantity} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
