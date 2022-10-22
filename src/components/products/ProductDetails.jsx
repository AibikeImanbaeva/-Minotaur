import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <div>
      {productDetails ? (
        <>
          <img src={productDetails.image} alt="" width="200" height="200" />
          <h3>{productDetails.title}</h3>
          <h3>{productDetails.description}</h3>
          <h3>{productDetails.price}</h3>
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
};

export default ProductDetails;
