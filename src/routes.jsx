import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Checkout from "./components/Checkout";
import { useState } from "react";
import { CartProvider } from "./CartContext";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "shop", element: <Shop /> },
  { path: "checkout", element: <Checkout /> },
]);

export default routes;
