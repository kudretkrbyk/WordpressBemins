import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Instagram() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
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
        <Slider className="w-full h-full overflow-hidden" {...settings}>
          <div className="p-5">
            <img src={feeds[0].image}></img>
          </div>
          <div className="p-5">
            <img src={feeds[1].image}></img>
          </div>
          <div className="p-5">
            <img src={feeds[2].image}></img>
          </div>
          <div className=" p-5">
            <img src={feeds[3].image}></img>
          </div>
          <div className="p-5">
            <img src={feeds[4].image}></img>
          </div>
          <div className="p-5">
            <img src={feeds[5].image}></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}
