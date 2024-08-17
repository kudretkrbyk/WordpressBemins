import Slider from "react-slick";
import "../slick-carousel/slick.css";
import "../slick-carousel/slick-theme.css";
const PrevArrow = ({ className, style, onClick }) => (
  <button
    style={{ ...style, left: 0, backgroundColor: "red" }}
    onClick={onClick}
    className={className}
  >
    <div>back</div>
  </button>
);
const NextArrow = ({ className, style, onClick }) => (
  <button
    style={{ ...style, right: 0, backgroundColor: "red" }}
    onClick={onClick}
    className={className}
  >
    <div>back</div>
  </button>
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
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {feeds.map((feed) => (
            <div key={feed.id} className="p-5">
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
