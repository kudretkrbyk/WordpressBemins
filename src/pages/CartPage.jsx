import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { updateCartItem, removeFromCart } from "../redux/slices/cartSlicie";
import CartPageCalculate from "../components/CartPageCalculate";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCalculateSubTotalCost = () => {
    const totalCost = cartItems.reduce((total, item) => {
      return total + item.fiyat * item.quantity; // Her ürünün fiyatı ve miktarını çarparak toplama ekler
    }, 0); // Başlangıç değeri 0

    return totalCost;
  };
  const SubTotalCost = handleCalculateSubTotalCost();
  const totalCost = SubTotalCost + (SubTotalCost * 18) / 100;

  const handleUpdateCart = (id, newQuantity, newColor, newSize) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        updateCartItem({
          id,
          quantity: newQuantity,
          color: newColor,
          size: newSize,
        })
      );
    }
  };

  console.log(cartItems);
  return (
    <div className="w-full h-full  flex flex-col gap-10 p-10">
      <div className="flex items-center justify-center gap-10 text-xl font-bold ">
        <div className="flex flex-col  items-center group/cart">
          <Link className="" to="/cart">
            Cart
          </Link>
          <div className="w-[0px] h-[2px] bg-black group-hover/cart:w-full duration-300 "></div>
        </div>
        <div className="flex flex-col  items-center group/checkout">
          <Link to="/checkout">Checkout</Link>
          <div className="w-[0px] h-[2px] bg-black group-hover/checkout:w-full duration-300 "></div>
        </div>
        <div className="flex flex-col  items-center group/order">
          <Link to="/orderTracking">Order Tracking</Link>
          <div className="w-[0px] h-[2px] bg-black group-hover/order:w-full duration-300 "></div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center gap-10 ">
        <div className="flex flex-col gap-10 w-9/12 border ">
          <div className="flex items-center justify-between w-full border-b p-4">
            <div className="">Product</div>
            <div className="w-full flex items-center justify-end gap-20 ">
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
          </div>
          {cartItems.map((items, index) => (
            <div key={index} className="flex items-center justify-between ">
              <div className="flex items-center gap-3 w-full ">
                <img
                  className="w-[200px] h-[200px] object-contain object-center"
                  src={items.fotograflar[0]}
                />
                <div>
                  {items.ad},{items.selectedSize}{" "}
                </div>
              </div>
              <div className="flex items-start justify-end gap-16 w-full p-4">
                <div>{items.fiyat} </div>
                <div className="flex items-center justify-center border gap-10 p-2">
                  <span
                    onClick={() =>
                      handleUpdateCart(items.id, items.quantity + 1)
                    }
                    className="font-bold hover:cursor-pointer "
                  >
                    +
                  </span>
                  <span>{items.quantity}</span>
                  <span
                    onClick={() =>
                      handleUpdateCart(items.id, items.quantity - 1)
                    }
                    className="font-bold hover:cursor-pointer"
                  >
                    -
                  </span>
                </div>
                <div>${items.fiyat} </div>
              </div>
            </div>
          ))}
          <div>
            <div className="p-4 flex items-center justify-between ">
              <div className="flex items-center justify-center gap-3">
                <input
                  className="border focus:outline-none w-80 h-10 rounded px-2 "
                  placeholder="Coupon code"
                  type="input"
                ></input>
                <button className="bg-black text-white p-2 px-6 rounded hover:bg-[#54d9e1] duration-300">
                  Apply Coupon
                </button>
              </div>

              <div>
                <button className="border border-black rounded p-2 px-6 hover:bg-[#54d9e1] duration-300">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
        <CartPageCalculate
          SubTotalCost={SubTotalCost}
          totalCost={totalCost}
        ></CartPageCalculate>
      </div>
    </div>
  );
}
