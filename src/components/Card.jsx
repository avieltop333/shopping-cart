import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

export default function Card({ children, item }) {
  const [quantity, setQuantity] = useState(0);

  const { cart, setCart } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="bg-green-200 flex flex-col items-center text-center h-60 justify-around p-2 align-middle rounded-md">
      {children}
      <div className="flex gap-5">
        <button
          onClick={() =>
            quantity > 0 ? setQuantity((prev) => prev - 1) : null
          }
        >
          -
        </button>
        <p> {quantity}</p>
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button
        className="bg-amber-50 p-1 rounded-md hover:bg-amber-200 transition ease-in-out duration-300"
        onClick={() => {
          const currentCart = [...cart];

          const itemExistsIndex = currentCart.findIndex(
            (cartItem) => cartItem.item === item.title
          );

          console.log(itemExistsIndex);

          if (itemExistsIndex !== -1 && quantity > 0) {
            const updatedCart = currentCart.map((cartItem, index) => {
              return itemExistsIndex === index
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem;
            });

            setCart(updatedCart);
          } else if (quantity > 0) {
            setCart((prev) => [
              ...prev,
              { item: item.title, price: item.price, quantity: quantity },
            ]);
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
