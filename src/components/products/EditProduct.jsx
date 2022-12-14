import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const [product, setProduct] = useState(productDetails);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      {product ? (
        <>
          <input type="text" placeholder='Image' name='image' onChange={handleInp} value={product.image}/> <br />
    <input type="text" placeholder='Title' name='title' onChange={handleInp} value={product.title}/> <br />
    <input type="text" placeholder='Description' name='description' onChange={handleInp} value={product.description}/> <br />
    <input type="text" placeholder='Type' name='type' onChange={handleInp} value={product.type}/> <br />
    <input type="text" placeholder='Price' name='price' onChange={handleInp} value={product.price}/> <br />
    
    <button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/catalog");
            }}
          >
            Save changes
          </button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
