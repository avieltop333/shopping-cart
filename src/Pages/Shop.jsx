import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../CartContext";
import Card from "../components/Card";

export default function Shop() {
  const { cart, setCart } = useCart();

  const [shop, setShop] = useState([]);

  useEffect(() => {
    async function getShoppingData() {
      const shoppingData = await axios.get(
        "https://fakestoreapi.com/products/"
      );

      console.log(shoppingData);
      setShop(shoppingData.data);
    }

    getShoppingData();
  }, []);

  useEffect(() => {
    console.log(shop);
  }, [shop]);

  return (
    <div>
      <Nav />
      <div className="grid gap-3 grid-cols-5 p-3">
        {shop.map((item) => {
          return (
            <Card item={item}>
              <img src={item.image} alt="" className="w-[5rem] h-[5rem]" />
              <p className="truncate overflow-hidden w-full">{item.title}</p>
              <p>Price: ${item.price}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
