import { FaPlay } from "react-icons/fa";

export default function ShopNow() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute z-10">
        <img src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/video.jpg"></img>
      </div>
      <div className="absolute w-full h-screen flex flex-col items-center justify-center gap-10 z-20">
        <div className="text-black hover:text-white hover:bg-[#54d9e1] size-20 rounded-full flex items-center justify-center duration-500">
          <FaPlay className="size-10" />
        </div>
        <div className="text-6xl font-bold">Step into Fashion Excellence</div>
        <div>Unveiling the Latest Trends and Must-Have Looks</div>
        <div className="p-5">
          <button className="border border-black p-3 px-5 rounded-xl hover:bg-[#54d9e1] hover:border-white hover:text-white duration-500 ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
