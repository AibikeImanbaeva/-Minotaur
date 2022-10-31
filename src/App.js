import React from "react";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import "./styles/Index.css";
import BasketsContextProvider from "./contexts/BasketsContextProvider";


function App() {
  return (
    <BasketsContextProvider>


  <CartContextProvider>
  <ProductContextProvider>
  <AuthContextProvider>

  <MainRoutes />

 
  </AuthContextProvider>

  </ProductContextProvider>

 
 
  </CartContextProvider>
  </BasketsContextProvider>);
}

export default App;
