import axios from "axios";
import { PRODUCT_API } from "./constants";
import { useEffect, useState } from "react";

const useProductDetails = (prodId) => {
  const [productDetails, setProductDetails] = useState(null);
  const fetchProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${prodId}`
      );
      setProductDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return productDetails;
};

export default useProductDetails;
