import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

export default function Instagram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feeds = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-1.jpg",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-2.jpg",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-3.jpg",
    },
    {
      id: 4,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-4.jpg",
    },
    {
      id: 5,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram-5.jpg",
    },
    {
      id: 6,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/12/instagram.jpg",
    },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex gap-4 items-center justify-center p-4 border border-black">
        {feeds.map((image) => (
          <div key={image.id}>
            <img src={image.image}></img>
          </div>
        ))}
        <div className="absolute flex justify-between w-full z-30 left-0 p-10 top-1/2 transform -translate-y-1/2 ">
          <div className="border border-black rounded-full p-2 flex items-center justify-center ">
            {" "}
            <IoIosArrowBack className="size-7 group-hover:text-white text-black duration-300" />
          </div>
          <div className="border border-black rounded-full p-2 flex items-center justify-center hover:bg-[#54d9e1] duration-300">
            {" "}
            <IoIosArrowForward className="size-7 group-hover:text-white duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
