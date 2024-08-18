import { GoPerson } from "react-icons/go";
import { BiSolidDiscount } from "react-icons/bi";
import { useSelector } from "react-redux";
import ChectOutForm from "../components/ChectOutForm";
import CartPageNavigator from "../components/CartPageNavigator";
import handleCalculateSubTotalCost from "../functions/handleCalculateSubTotalCost";
import { useEffect, useState } from "react";

export default function CheckOut() {
  const [subTotalCost, setSubTotalCost] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const calculatedSubTotalCost = handleCalculateSubTotalCost(cartItems);
      setSubTotalCost(calculatedSubTotalCost);
    } else {
      setSubTotalCost(0); // Eğer cartItems boşsa veya null ise toplam maliyeti sıfır yapar
    }
  }, [cartItems]);

  const totalCost = subTotalCost + (subTotalCost * 18) / 100;
  return (
    <div className="w-full h-full flex flex-col items-center gap-10 ">
      <CartPageNavigator></CartPageNavigator>
      <div className="w-8/12 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <GoPerson className="size-5" />
          <div>
            <span>Returning customer?</span>
            <span className="font-bold"> Click here to login</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BiSolidDiscount className="size-5" />
          <div>
            <span>Have a coupon?</span>
            <span className="font-bold"> Click here to enter your code</span>
          </div>
        </div>
      </div>
      <div className="flex w-full p-10">
        <ChectOutForm></ChectOutForm>
        <div className="w-2/5 h-full border border-black p-2">
          <div>Product</div>
          <div className="flex flex-col">
            {" "}
            {cartItems.map((item, index) => (
              <div
                className="w-full flex items-start justify-between"
                key={index}
              >
                <div>
                  {" "}
                  <div className="w-full flex items-start justify-center p-3">
                    <div className="flex flex-col gap-4">
                      <img
                        className="w-[100px] h-[100px] object-contain object-center"
                        src={item.fotograflar[0]}
                      ></img>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <span>{item.ad} </span>
                      <span className="font-bold">QTY:{item.quantity} </span>
                    </div>
                  </div>
                </div>

                <div>$ {item.fiyat}</div>
              </div>
            ))}
          </div>

          <div>$ {totalCost} </div>
        </div>
      </div>
    </div>
  );
}
