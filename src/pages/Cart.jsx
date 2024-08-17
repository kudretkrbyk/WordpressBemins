import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  return (
    <div className="w-full h-full flex items-center justify-center p-20">
      <div className="flex w-9/12"></div>
      <div className="flex flex-col w-3/12"></div>
    </div>
  );
}
