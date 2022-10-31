import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import {useCart} from '../../contexts/CartContextProvider';
import { useAuth } from "../../contexts/AuthContextProvider"
import '../../styles/card.css'


const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { adminBtn } = useAuth()
  const {addProductToCart} = useCart()

  return (
<div>
      {adminBtn ? (
        <>
          <div className="card">
            <img src={item.image} alt="test" style={{ width: "100%" }} />
            <h1>{item.title}</h1>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
            <p className="btns">
              <button >Добавить в корзину</button>
              <button onClick={() => navigate(`/details/${item.id}`)}>
                Просмотр
              </button>
              <button onClick={() => navigate(`/edit/${item.id}`)}>
                update
              </button>
              <button onClick={() => deleteProduct(item.id)}>delete</button>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <img
              className="card_image"
              src={item.image}
              alt="test"
              style={{ width: "100%" }}
            />
            <h1>{item.title}</h1>
            <p className="price">{item.price} сом</p>
            <p className="desc-card">{item.description}</p>
            <p>
              <button  onClick={()=>addProductToCart(item)}>Добавить в корзину</button>
              <button onClick={() => navigate(`/details/${item.id}`)}>
                Просмотр
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;