import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    type: "",
    price: "",
  });

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
      <input
        type="text"
        placeholder="Image"
        value={product.image}
        name="image"
        onChange={handleInp}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Title"
        value={product.title}
        name="title"
        onChange={handleInp}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Description"
        value={product.description}
        name="description"
        onChange={handleInp}
      />{" "}
      <br />
      {/* <input type="text" placeholder='Type'  value={product.type}name='type' onChange={handleInp}/> <br /> */}
      <input
        type="text"
        placeholder="Price"
        value={product.price}
        name="price"
        onChange={handleInp}
      />{" "}
      <br />
      <select onChange={handleInp} value={product.type} name="type">
        <option value="eclairs">Эклеры</option>
        <option value="makarons">Макаронсы</option>
        <option value="giftbaskets">Подарочные наборы</option>
        <option value="caramel">Карамель на палочке</option>
        <option value="waffles">Вафельные трубочки</option>
        <option value="chokpotato">Десерт картошка</option>
      </select>
      <br />
      <button
        onClick={() => {
          addProduct(product);
        }}
      >
        Save Product
      </button>
    </>
  );
};

export default AddProduct;
