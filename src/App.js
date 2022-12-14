import React from "react";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";


function App() {
  return (<CartContextProvider>
  <ProductContextProvider>
  <AuthContextProvider>
  <Navbar />
  <MainRoutes />
  <Footer />
  </AuthContextProvider>
  </ProductContextProvider>

 
 
  </CartContextProvider>);
}

export default App;
