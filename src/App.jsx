import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./CartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
}

export default App;
