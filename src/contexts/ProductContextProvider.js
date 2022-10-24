import React from 'react';
import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, API_PRODUCTS } from '../helpers/consts';


export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};



const ProductContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();
  //addProduct

  const addProduct = async (newProduct) => {
    await axios.post(API_PRODUCTS, newProduct);
    navigate('/catalog')
    // getProducts()
  };
   // get all products
   const getProducts = async () => {
    const { data } = await axios(`${API_PRODUCTS}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  //delete
const deleteProduct = async (id) => {
  await axios.delete(`${API_PRODUCTS}/${id}`)
  getProducts()
}

//udpate//details

const getProductDetails = async (id) => {
  const { data } = await axios (`${API_PRODUCTS}/${id}`)
  dispatch({
    type: ACTIONS.GET_PRODUCT_DETAILS,
    payload: data
  })  
}


const saveEditedProduct = async(newProduct) => {
  await axios.patch(`${API_PRODUCTS}/${newProduct.id}, newProduct`)
  getProducts()
}



const fetchByParams = (query, value) => {
  const search = new URLSearchParams(location.search);
  if(value === 'all'){
    search.delete(query)
  }else {
    search.set(query, value)
  }

  const url = `${location.pathname}?${search.toString()}`

  navigate(url)
}



  const value = {
    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    fetchByParams,
    products: state.products,
    productDetails: state.productDetails,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  )
}

export default ProductContextProvider



