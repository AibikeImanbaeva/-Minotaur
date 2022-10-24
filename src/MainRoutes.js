import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import CreateBasketsPage from "./pages/CreateBasketsPage";
import CreateBasketsTastePage from "./pages/CreateBasketsTastePage";
import CreateDesignImagePage from "./pages/CreateDesignImagePage";
import CreateDesignPage from "./pages/CreateDesignPage";
import EditProductPage from "./pages/EditProductPage";
import GiftBasketsPage from "./pages/GiftBasketsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegistrationPage from "./pages/RegistrationPage";
import GiftsPage from "./pages/GiftsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 2,
    },
    {
      link: "/catalog",
      element: <CatalogPage />,
      id: 3,
    },
    {
      link: "/createbaskets",
      element: <CreateBasketsPage />,
      id: 4,
    },
    {
      link: "/createbasketstaste",
      element: <CreateBasketsTastePage />,
      id: 5,
    },
    {
      link: "/createdesignimage",
      element: <CreateDesignImagePage />,
      id: 6,
    },
    {
      link: "/createdesign",
      element: <CreateDesignPage />,
      id: 7,
    },
    {
      link: "/giftbaskets",
      element: <GiftBasketsPage />,
      id: 8,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 9,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 10,
    },
    {
      link: "/productdetails/:id",
      element: <ProductDetailsPage />,
      id: 11,
    },
    {
      link: "/registration",
      element: <RegistrationPage />,
      id: 12,
    },
    {
      link: "/gifts",
      element: <GiftsPage />,
      id: 13,
    }
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/editproduct/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];
  

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {PRIVATE_ROUTES.map((item)=>(
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
}

export default MainRoutes;
