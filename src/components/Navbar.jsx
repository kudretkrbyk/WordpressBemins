import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around w-full p-4 px-10 ">
      <div className="w-full text-xl font-bold ">
        <span className="text-xl font-bold">bemins</span>
        <span>.</span>
      </div>
      <div className="flex items-center w-full justify-center gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        <Link to="/blog">Blog</Link>
        <Link to="/page">Page</Link>
      </div>
      <div className="flex w-full items-center justify-end gap-10  ">
        <span className=" ">
          <IoIosSearch className="size-6" />
        </span>
        <span className=" ">
          <GoPerson className="size-6" />
        </span>
        <span className="relative ">
          <CiHeart className="size-6" />
          <div className="bg-[#54d9e1] rounded-full size-6 absolute -top-2 -right-3 flex items-center justify-center">
            2
          </div>
        </span>
        <span className="relative ">
          <IoBagOutline className="size-6 " />
          <div className="bg-[#54d9e1] rounded-full size-6 absolute -top-2 -right-3 flex items-center justify-center">
            3
          </div>
        </span>
      </div>
    </div>
  );
}
