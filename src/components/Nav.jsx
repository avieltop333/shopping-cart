import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-around bg-green-800  text-blue-100 p-2 rounded-md">
      <p className="font-extrabold">Shopperman</p>
      <ul className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </ul>
    </nav>
  );
}
