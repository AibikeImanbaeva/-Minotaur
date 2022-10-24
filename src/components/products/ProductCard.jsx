import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import {useCart} from '../../contexts/CartContextProvider';
import { useAuth } from "../../contexts/AuthContextProvider"


const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { adminBtn } = useAuth()
  const {addProductToCart} = useCart()

  return (
    <div>
      {item.title} {item.price} {item.description} 
   <img src={item.image} style={{width:"50px"}} alt="" />
   {adminBtn ? (
        <>
          <button onClick={()=> navigate(`/details/${item.id}`)}>details</button>
          <button onClick={()=> navigate(`/edit/${item.id}`)}>update</button> 
          <button onClick={()=> deleteProduct(item.id)}>delete</button>
          <button>Купить</button>
        </>
      ):
      (<>
          <button onClick={()=> navigate(`/details/${item.id}`)}>details</button>
          <button>Купить</button>
    </>)}
      <button onClick={()=>addProductToCart(item)}>add to card</button>
    </div>
  );
};

export default ProductCard;