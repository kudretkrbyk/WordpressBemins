import { useSelector } from "react-redux";
import { useState } from "react";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCalculateTotalCost = () => {
    const totalCost = cartItems.reduce((total, item) => {
      return total + item.fiyat * item.quantity; // Her ürünün fiyatı ve miktarını çarparak toplama ekler
    }, 0); // Başlangıç değeri 0

    return totalCost;
  };
  const totalCost = handleCalculateTotalCost();

  console.log("burası cart");
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 p-10">
      <div className="flex flex-col gap-10 w-9/12 ">
        <div className="flex items-center justify-between w-full ">
          <div>Product</div>
          <div className="w-full flex items-center justify-end gap-20 ">
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
        </div>
        {cartItems.map((items, index) => (
          <div key={index} className="flex items-center justify-between ">
            <div className="flex items-center gap-3 w-full">
              <img className="w-[200px] h-[200px]" src={items.fotograflar[0]} />
              <div>{items.ad} </div>
            </div>
            <div className="flex items-start justify-end gap-24 w-full">
              <div>{items.fiyat} </div>
              <div>{items.quantity} </div>
              <div>${items.fiyat} </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-3/12">
        <div className="bg-gray-700 p-5"> Cart Totals</div>
        <div className="flex flex-col bg-gray-300 p-5 gap-10">
          <div className="flex items-center justify-between gap-40 ">
            <div>Sub total</div>
            <div>111</div>
          </div>
          <div className="flex items-center justify-between gap-40 ">
            <div>Shipping</div>
            <div>asdasd</div>
          </div>
          <div className="flex items-center justify-between gap-40 ">
            {" "}
            <div>Total</div>
            <div>{totalCost} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
