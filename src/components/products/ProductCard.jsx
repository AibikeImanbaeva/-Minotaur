import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
// import {useCart} from '../../contexts/CartContextProvider';


const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  // const {addProductToCart} = useCart()

  return (
    <div>
      {item.title} {item.price} {item.description} 
   <img src={item.image} style={{width:"50px"}} alt="" />
      <button onClick={()=> navigate(`/details/${item.id}`)}>details</button>
      <button onClick={()=> navigate(`/edit/${item.id}`)}>update</button>
      <button onClick={()=> deleteProduct(item.id)}>delete</button>
      {/* <button onClick={()=>addProductToCart(item)}>add to card</button> */}
    </div>
  );
};

export default ProductCard;