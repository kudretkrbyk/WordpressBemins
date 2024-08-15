import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div>Testimonials</div>
      <div className="flex items-center justify-center gap-20 w-full p-[200px] h-full ">
        <div className=" w-[660px] h-[300px] rounded-[50%_/_50%] overflow-hidden -rotate-45 flex items-center justify-center">
          <div className="w-[470px] h-[385px] rotate-45 bg-cover bg-center bg-[url(https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2019/02/tes-3.jpg)]  "></div>
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <div className="flex gap-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <div className="text-3xl font font-bold">
            “A great company to buy from. Excellent quality products at good
            value. Delivery is efficient and quick.”
          </div>
          <span>Ann Smith</span>
          <span>CEO & Founder</span>
          <div className="flex gap-4">
            {" "}
            <button>L</button>
            <button>R</button>
          </div>
        </div>
      </div>
    </div>
  );
}
