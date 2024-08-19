// src/pages/Shop.js

import { useState } from "react";

import ShopTopMenu from "../components/ShopTopMenu";

import useFetchProducts from "../hooks/useFetchProducts";
import useFilterProducts from "../hooks/useFilterProducts";

import ShopPageCategories from "../components/ShopPageCategories";
import ShopPageColorList from "../components/ShopPageColorList";
import ShopPageFilterSlider from "../components/ShopPageFilterSlider";
import ShopPageProductListing from "../components/ShopPageProductListing";

export default function Shop() {
  const [selectedColors, setSelectedColors] = useState([]); // Seçilen renkler
  const [selectedSizes, setSelectedSizes] = useState([]); // Seçilen boyutlar
  const [selectedCategory, setSelectedCategory] = useState([]); // Seçilen boyutlar
  const [subCatFlag, setSubCatFlag] = useState({});

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
    setSelectedCategory([]);
  };

  console.log("fp: ", filteredProducts);
  console.log("color list:", colorsList);
  return (
    <div className="w-full flex flex-col relative">
      <ShopTopMenu />
      <div className="w-full flex ">
        <div className="w-3/12 h-full flex flex-col gap-10 p-4 ">
          {/* categori*/}
          <ShopPageCategories
            categories={categories}
            handleCategoryClick={handleCategoryClick}
            handleOpenSubCategories={handleOpenSubCategories}
            subCatFlag
            {...subCatFlag}
          ></ShopPageCategories>
          {/* Filter Slider Gelecek */}
          <ShopPageFilterSlider
            handlePriceChange={handlePriceChange}
            priceRange={priceRange}
            maxPrice={maxPrice}
          ></ShopPageFilterSlider>

          <div className="">
            <div className="font-bold">Color:</div>

            {/*Color List gelecek */}
            <ShopPageColorList
              colorsList={colorsList}
              handleColorClick={handleColorClick}
              colorCount={colorCount}
            ></ShopPageColorList>
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
        </div>
        {/*Ürünler Listelenecek */}
        <ShopPageProductListing
          filteredProducts={filteredProducts}
        ></ShopPageProductListing>
      </div>
    </div>
  );
}
