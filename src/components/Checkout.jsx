import Nav from "./Nav";
import { useCart } from "../CartContext";
import { useEffect, useState } from "react";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
  }, []);

  function calcTotal() {
    let cartCopy = [...cart];
    const total = cartCopy.reduce(
      (accumulator, number) => accumulator + number.price * number.quantity,
      0
    );

    setTotal(total);
  }

  useEffect(() => {
    calcTotal();
  }, [cart]);

  return (
    <div>
      <Nav />
      <div className="p-5">
        <div className="flex gap-1 justify-around align-middle">
          <div className="w-50 text-center">Item</div>
          <div className="w-32 text-center">Quantity</div>
          <div className="w-32 text-center">Price</div>
        </div>
        {cart.map((cartItem) => (
          <>
            <div className="flex gap-1 justify-around text-center border-t-amber-500 border-t">
              <div className="w-50 text-center whitespace-nowrap overflow-hidden truncate">
                {cartItem.item}
              </div>
              <div className="text-center w-32 ">{cartItem.quantity}</div>
              <div className="w-32 text-center">{cartItem.price}</div>
            </div>
          </>
        ))}
        <div className="flex justify-center"> Total: ${total}</div>
      </div>
    </div>
  );
}
