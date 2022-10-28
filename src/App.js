import React from "react";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
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
  <Footer />
  </ProductContextProvider>

 
 
  </CartContextProvider>
  </BasketsContextProvider>);
}

export default App;
