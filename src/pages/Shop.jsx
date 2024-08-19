// src/pages/Shop.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopTopMenu from "../components/ShopTopMenu";
import ShopProductDetails from "../components/ShopProductDetails";
import Slider from "react-slider";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";

import useFetchProducts from "../hooks/useFetchProducts";
import useFilterProducts from "../hooks/useFilterProducts";
import colorCodes from "../constraint/colors";
import ShopGridFilterComp from "../components/ShopGridFilterComp";

export default function Shop() {
  const navigate = useNavigate();
  const [visibleProducts, setVisibleProducts] = useState(10); // Başlangıçta 10 ürün göster

  const [selectedColors, setSelectedColors] = useState([]); // Seçilen renkler
  const [selectedSizes, setSelectedSizes] = useState([]); // Seçilen boyutlar
  const [selectedCategory, setSelectedCategory] = useState([]); // Seçilen boyutlar
  const [subCatFlag, setSubCatFlag] = useState({});
  const [gridCols, setGridCols] = useState("grid-cols-3"); // Varsayılan grid kolonları
  const {
    productList,
    filteredProducts,
    colorsList,
    categories,
    colorCount,
    sizeCount,
    sizeList,
    maxPrice,
    priceRange,
    setFilteredProducts,
    setPriceRange,
  } = useFetchProducts();

  useFilterProducts(
    productList,
    selectedCategory,
    priceRange,
    selectedColors,
    selectedSizes,

    setFilteredProducts
  );

  const handleOpenSubCategories = (categoryName) => {
    setSubCatFlag((prevFlag) => ({
      ...prevFlag,
      [categoryName]: !prevFlag[categoryName],
    }));
  };

  const handleShowMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10); // Her seferinde 10 ürün daha göster
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleColorClick = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSizeClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  const handleFilterClick = (id) => {
    switch (id) {
      case 1:
        setGridCols("grid-cols-2");
        break;
      case 2:
        setGridCols("grid-cols-3");
        break;
      case 3:
        setGridCols("grid-cols-4");
        break;
      case 4:
        setGridCols("grid-rows-1");
        break;
      default:
        setGridCols("grid-cols-3");
        break;
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="w-full flex flex-col relative">
      <ShopTopMenu />
      <div className="w-full flex ">
        <div className="w-3/12 h-full flex flex-col gap-10 p-4 ">
          <div>
            <div className="font-bold flex flex-col ">Categories</div>
            {categories.map((category, index) => (
              <div className="flex flex-col  mt-2" key={index}>
                <div className="flex  items-center justify-between gap-2 text-blue-700 hover:cursor-pointer">
                  <div onClick={() => handleCategoryClick(category.name)}>
                    {category.name}
                  </div>
                  {category.subcategories.length > 0 && (
                    <div className="">
                      <IoIosArrowDown
                        onClick={() => handleOpenSubCategories(category.name)}
                      />
                    </div>
                  )}
                </div>
                {subCatFlag[category.name] && (
                  <div className="flex flex-col gap-2 ml-4">
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex}>{sub}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="">
            <div className="font-bold">Price</div>
            <Slider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={priceRange}
              min={0}
              max={maxPrice}
              step={10}
              onChange={handlePriceChange}
            />
            <div className="flex flex-col gap-2 ">
              <div className="bg-black w-full h-1"></div>
              <div className="flex items-center justify-between w-full">
                {" "}
                <span>{priceRange[0]} TL</span>
                <span>{priceRange[1]} TL</span>
              </div>
              <div>
                <span>
                  Range: {priceRange[0]}-{priceRange[1]}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="font-bold">Color:</div>
            <div className="grid grid-cols-5 w-full gap-2 p-2">
              {colorsList.map((color, index) => (
                <div
                  className="relative flex items-center justify-center size-10 rounded-full group border border-black cursor-pointer"
                  style={{ backgroundColor: colorCodes[color] || "#000000" }} // Default color black if color code not found
                  key={index}
                  onClick={() => handleColorClick(color)}
                >
                  <div className=" absolute  -top-10 text-blue-500 hidden group-hover:flex items-center justify-center bg-black w-16 h-7 ">
                    {color}({colorCount[color] || 0}){" "}
                    <div className="absolute top-[10px] left-3 text-black">
                      {" "}
                      <IoMdArrowDropdown className="size-10" />{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="font-bold">Size:</div>
            <div className="grid grid-cols-5 w-full gap-2 p-2">
              {sizeList.map((size, index) => (
                <div
                  className="flex items-center justify-center   border cursor-pointer"
                  key={index}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}({sizeCount[size] || 0}){" "}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
          <div className="mt-4">
            <div className="font-bold">Feature Product</div>
            {/* Feature Product component goes here */}
          </div>
        </div>
        <div className="w-9/12 h-full ">
          <ShopGridFilterComp onFilterClick={handleFilterClick} />
          <div className={`grid ${gridCols} gap-4 p-4 overflow-hidden`}>
            {filteredProducts.slice(0, visibleProducts).map(
              (
                product,
                index // Yalnızca visibleProducts kadar ürün göster
              ) => (
                <div
                  onClick={() => handleProductClick(product.id)}
                  className="relative group overflow-hidden "
                  key={index}
                >
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
                            <div key={index}>{size} </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          {visibleProducts < filteredProducts.length && (
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleShowMoreProducts}
              >
                Daha Fazla Göster
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
