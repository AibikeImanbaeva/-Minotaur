import React, { useEffect } from "react";
import "../styles/cartPage.css";
import del from ".././components/Footer/icons/CPdelete.svg"
import  "../components/Footer/icons/left-arrow.svg";

import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../contexts/CartContextProvider";
import { TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();


  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }
  const navigate = useNavigate();
  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <>
    <Navbar />
    <div className="mainCardPage" style={{ marginBottom: "200px" }}>
      <div className="container">
        <h1>КОРЗИНА</h1>

        <div className="cardPage">
          <div className="cart-cards" style={{display: "flex", flexDirection: "column"}}>

            {cart?.products.map((row) => (
              <div className="cardPage_card" style={{marginBottom: "50px"}}>
                <img src={row.item.picture} alt="product" style={{width: "100px"}}/>

                <div className="cardPage_info">
                  <div className="cardPage_p">
                    <p>{row.item.name}</p>
                  </div>

                  <div className="cardPage_amount-cost">
                    <div className="cardPage_amount">
                      <TextField
                        type="number"
                        value={row.count}
                        onChange={(e) =>
                          changeProductCount(e.target.value, row.item.id)
                        } />
                        {/* <TextField InputLabelProps={{ shrink: true }} /> */}

                    </div>
                    <div className="cardPage_cost">
                      <p className="cardPage_cos">Цена:</p>
                      <p>{row.item.price}₽</p>
                    </div>
                  </div>
                </div>

                <div className="cardPage_like-delete">
                  <a className="CPdelete" onClick={() => deleteProductInCart(row.item.id)}>
                    <img src={del} alt="delete" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="cardPage_sum">
            <div className="cardPage_sum-cost-check">
              <div className="cardPage_sum-cost">
                <h3>СУММА ЗАКАЗА</h3>
                <p className="cardPage_sum__cost" style={{ marginBottom: "20px" }}>{cart?.totalPrice} ₽</p>
              </div>
            </div>
            <button className="cardPage_sum__btn" onClick={cartCleaner}>
              <a onClick={() => (navigate("/pay"))}>ОФОРМИТЬ ЗАКАЗ</a>
            </button>
          </div>
        </div>
      </div>
    </div >
    </>
    
  );
};

export default CartPage;

  