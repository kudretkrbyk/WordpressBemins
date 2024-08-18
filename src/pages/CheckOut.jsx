import { GoPerson } from "react-icons/go";
import { BiSolidDiscount } from "react-icons/bi";

export default function CheckOut() {
  return (
    <div className="w-full h-full flex flex-col items-center p-5">
      <div className="w-8/12 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <GoPerson className="size-5" />
          <div>
            {" "}
            <span>Returning customer?</span>
            <span className="font-bold">Click here to login</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BiSolidDiscount className="size-5" />
          <div>
            {" "}
            <span>Have a coupon?</span>
            <span className="font-bold">Click here to enter your code</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
