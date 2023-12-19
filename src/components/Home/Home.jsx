import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Clothing</h1>
      <ul>
        <li>
          <Link to={"/women"}>Women</Link>
        </li>
        <li>
          <Link to={"/men"}>Men</Link>
        </li>
      </ul>
      <h1>Jewellery</h1>
      <ul>
        <li>
          <Link to={"/jewellery"}>Jewellery</Link>
        </li>
      </ul>
      <h1>Electronics</h1>
      <ul>
        <li>
          <Link to={"/electronics"}>Electronics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
