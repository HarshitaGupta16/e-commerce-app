import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Men from "./components/Products/Men/Men.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Women from "./components/Products/Women/Women.jsx";
import Jewellery from "./components/Products/Jewellery/Jewellery.jsx";
import Electronics from "./components/Products/Electronics/Electronics.jsx";
import ProductDetails from "./components/Products/Product/ProductDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/jewellery",
        element: <Jewellery />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      { path: "/productDetails/:prodId", element: <ProductDetails /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
