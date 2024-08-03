import { useEffect, useState } from "react";
import ShopTopMenu from "../components/ShopTopMenu";
import Slider from "react-slider";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

export default function Shop() {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colorCount, setColorCount] = useState([]);
  const [sizeCount, setSizeCount] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [subCatFlag, setSubCatFlag] = useState({});
  const [visibleProducts, setVisibleProducts] = useState(10); // Başlangıçta 10 ürün göster
  const [priceRange, setPriceRange] = useState([0, 1000]); // Fiyat aralığı için state
  const [maxPrice, setMaxPrice] = useState(1000); // Maksimum fiyatı takip et
  const [minPrice, setMinPrice] = useState(1000); // Maksimum fiyatı takip et

  const handleOpenSubCategories = (categoryName) => {
    setSubCatFlag((prevFlag) => ({
      ...prevFlag,
      [categoryName]: !prevFlag[categoryName],
    }));
  };

  const handleShowMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10); // Her seferinde 10 ürün daha göster
  };

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.product);
        setFilteredProducts(data.product); // Filtrelenmiş ürünleri de başlangıçta tüm ürünler olarak ayarla
        setCategories(data.categories);

        // Colors ve Sizes listelerini oluşturma
        const colors = data.product.flatMap((product) => product.colors);
        const sizes = data.product.flatMap((product) => product.size);

        setColorsList([...new Set(colors)]);
        setSizeList([...new Set(sizes)]);
        // Color count ve size count objelerini oluşturma
        const colorCount = data.product.reduce((count, product) => {
          product.colors.forEach((color) => {
            count[color] = (count[color] || 0) + 1;
          });
          return count;
        }, {});

        const sizeCount = data.product.reduce((count, product) => {
          product.size.forEach((size) => {
            count[size] = (count[size] || 0) + 1;
          });
          return count;
        }, {});
        setColorCount(colorCount);
        setSizeCount(sizeCount);

        // Maksimum fiyatı bulma
        const maxPrice = Math.max(
          ...data.product.map((product) => product.fiyat)
        );
        setMaxPrice(maxPrice);
        console.log(maxPrice);
        setPriceRange([0, maxPrice]);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    const filtered = productList.filter(
      (product) => product.fiyat >= newRange[0] && product.fiyat <= newRange[1]
    );
    setFilteredProducts(filtered);
  };

  const colorCodes = {
    red: "#ef5050",
    green: "#20b2aa",
    Blue: "#5173a6",
    yellow: "#c69a02",
    black: "#000000",
    white: "#FFFFFF",
    Beige: "#e6d4b4",
    Brick: "#6b302c",
    gray: "#8d9098",
    lilac: "#a5afc5",
    pink: "#ffc0cb",
    // Diğer renk kodları buraya eklenebilir
  };

  return (
    <div className="w-full flex flex-col relative">
      <ShopTopMenu />
      <div className="w-full flex ">
        <div className="w-3/12 h-full flex flex-col gap-10 p-4 ">
          <div>
            <div className="font-bold flex flex-col">Categories</div>
            {categories.map((category, index) => (
              <div className="flex flex-col gap-4 mt-2" key={index}>
                <div className="flex items-center justify-between gap-2 text-blue-700">
                  <div>{category.name}</div>
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
                  className="relative flex items-center justify-center size-10 rounded-full group border border-black"
                  style={{ backgroundColor: colorCodes[color] || "#000000" }} // Default color black if color code not found
                  key={index}
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
                  className="flex items-center justify-center   border"
                  key={index}
                >
                  {size}({sizeCount[size] || 0}){" "}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="font-bold">Feature Product</div>
            {/* Feature Product component goes here */}
          </div>
        </div>
        <div className="w-9/12 h-full ">
          <div className="grid grid-cols-3 gap-4 p-4 overflow-hidden ">
            {filteredProducts.slice(0, visibleProducts).map(
              (
                product,
                index // Yalnızca visibleProducts kadar ürün göster
              ) => (
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

                  <div className="flex flex-col absolute top-10 right-10 w-full   ">
                    <div className="absolute top-0 group-hover:right-0 -right-full duration-700 delay-0  ">
                      <IoBagOutline className="size-6" />
                    </div>
                    <div className="absolute top-[40px] group-hover:right-0 -right-full duration-700 delay-75  ">
                      <IoIosSearch className="size-6" />
                    </div>
                    <div className="absolute top-[80px] group-hover:right-0 -right-full duration-700 delay-100 ">
                      <CiHeart className="size-6" />
                    </div>
                    <div className="absolute top-[120px] group-hover:right-0 -right-full duration-700 delay-150 ">
                      <MdCompareArrows className="size-6" />
                    </div>
                  </div>

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
