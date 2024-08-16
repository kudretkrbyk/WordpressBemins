import React from "react";
import { useState } from "react";

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
      <div className="flex gap-4 items-center justify-center p-4">
        {feeds.map((image) => (
          <div key={image.id}>
            <img src={image.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
