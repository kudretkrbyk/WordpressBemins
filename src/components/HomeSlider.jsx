import React, { useState } from "react";

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider = [
    {
      id: 1,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-1.jpg",
      description: "Unveiling This Season's",
      category: "Fashion",
    },
    {
      id: 2,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-2.jpg",
      description: "This İs A Long Open",
      category: "Robe",
    },
    {
      id: 3,
      image:
        "https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/slider-3.jpg",
      description: "Epitome Of The Big",
      category: "Sweater",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slider.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slider.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="relative w-full h-full">
        {slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full flex items-center justify-center bg-center bg-cover transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute bottom-0 left-0 w-full p-8  text-black">
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="font-bold text-3xl">{slide.description}</div>
                <div className="text-xl">{slide.category}</div>
                <div className="mt-4 py-2 px-4 bg-blue-500 text-black rounded">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}
