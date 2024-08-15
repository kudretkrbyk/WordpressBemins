import React, { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ShopProductDetails from "./ShopProductDetails";

export default function BestSellers() {
  const [idList] = useState([1, 5, 9, 25, 30]);
  const { productList } = useFetchProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = productList.filter((product) =>
    idList.includes(product.id)
  );

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + 5
  );

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < filteredProducts.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <h2>Best Sellers</h2>
      <div className="relative flex gap-4 p-4 overflow-hidden">
        {visibleProducts.map((product, index) => (
          <div className="relative group overflow-hidden " key={index}>
            <div className="relative">
              <img
                src={product.fotograflar[0]}
                alt={product.name}
                className="transition-opacity duration-500 ease-in-out"
              />
              <img
                src={product.fotograflar[1]}
                alt={product.name}
                className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />
            </div>
            <div className="bg-red-500 w-auto flex items-center justify-center absolute top-3 left-0 rounded p-1 px-3 ">
              {product.tag[0]}
            </div>
            <ShopProductDetails />
            {product.size.length > 0 && (
              <div className=" group-hover:opacity-60 opacity-0 flex  duration-700 flex-col items-center justify-center absolute bottom-0  bg-white w-full h-16 ">
                <div>
                  <div>Select Options</div>
                  <div className="flex items-center justify-center gap-4">
                    {product.size.map((size, index) => (
                      <div key={index}>{size}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevClick}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentIndex >= filteredProducts.length - 5}
        >
          Next
        </button>
      </div>
    </div>
  );
}
