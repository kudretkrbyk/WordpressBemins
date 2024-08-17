import Slider from "react-slick";
import "../slick-carousel/slick.css";
import "../slick-carousel/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const PrevArrow = ({ onClick }) => (
  <IoIosArrowBack
    style={{
      zIndex: "1",
    }} // Stil ve konum ayarları
    onClick={onClick} // Tıklama işlevi
    className="size-8 hover:cursor-pointer top-1/2 left-2 border border-black absolute rounded-full hover:bg-[#54d9e1] hover:text-white hover:border-none duration-300" // Varsayılan sınıf adları
  />
);
const NextArrow = ({ style, onClick }) => (
  <IoIosArrowForward
    style={{ ...style }}
    onClick={onClick}
    className="size-8 hover:cursor-pointer top-1/2 right-2 border border-black absolute rounded-full hover:bg-[#54d9e1] hover:text-white hover:border-none duration-300 "
  ></IoIosArrowForward>
);
export default function Instagram() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "react__slick__slider__parent",
  };

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
    <div className="w-full h-full flex items-center justify-center ">
      <div className="slider-container w-full h-full group">
        <Slider {...settings}>
          {feeds.map((feed) => (
            <div key={feed.id} className="p-6">
              <img
                src={feed.image}
                className="w-full h-full object-cover"
                alt={`Feed ${feed.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
