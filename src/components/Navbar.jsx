import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around w-full p-4 ">
      <div className="w-full ">
        <span>bemins</span>
        <span>.</span>
      </div>
      <div className="flex items-center w-full justify-center gap-10 ">
        <span>Home</span>
        <span>Shop</span>
        <span>Products</span>
        <span>Blog</span>
        <span>Page</span>
      </div>
      <div className="flex w-full items-center justify-end gap-10  ">
        <span>
          <IoIosSearch className="size-6" />
        </span>
        <span>
          <GoPerson className="size-6" />
        </span>
        <span>
          <CiHeart className="size-6" />
        </span>
        <span>
          <IoBagOutline className="size-6" />
        </span>
      </div>
    </div>
  );
}
