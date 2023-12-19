import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header className={classes.header}>
      <h1 style={{ color: "white" }}>Shop Shop</h1>
      <ul>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#f87171" : "white",
                background: isActive ? "white" : "#f87171",
                padding: "5px 10px",
                borderRadius: 5,
                marginLeft: "-30px",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#f87171" : "white",
                background: isActive ? "white" : "#f87171",
                padding: "5px 10px",
                borderRadius: 5,
              };
            }}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cart"}
            style={({ isActive }) => {
              return {
                color: isActive ? "#f87171" : "white",
                background: isActive ? "white" : "#f87171",
                padding: "5px 10px",
                borderRadius: 5,
                marginRight: 3,
              };
            }}
          >
            Cart 🛒
            <span
              className={
                cartItems.length > 0
                  ? classes.cartCount
                  : classes.cartCount + " " + classes.hide
              }
            >
              {cartItems.length}
            </span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
