import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

export default function Shop() {
  const [productList, setProductList] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colorCount, setColorCount] = useState([]);
  const [sizeCount, setSizeCount] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  const [subCatFlag, setSubCatFlag] = useState({});

  const handleOpenSubCategories = (categoryName) => {
    setSubCatFlag((prevFlag) => ({
      ...prevFlag,
      [categoryName]: !prevFlag[categoryName],
    }));
  };

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.product);
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
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

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
    <div className="w-full flex flex-col">
      <div className="w-full h-[480px] relative border border-red-500 overflow-hidden">
        <div className="absolute">
          <img
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/lookbook-3.jpg"
            alt="Lookbook"
          />
        </div>
        <div className="absolute flex items-center justify-center w-full gap-10 bottom-0">
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category.jpg"
              alt="Tops"
            />
            <span>Tops</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-4.jpg"
              alt="Shirts"
            />
            <span>Shirts</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-2.jpg"
              alt="Glasses"
            />
            <span>Glasses</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-5.jpg"
              alt="Sandals"
            />
            <span>Sandals</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-3.jpg"
              alt="Bag"
            />
            <span>Bag</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              className="rounded-full hover:scale-90 duration-700"
              src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-1.jpg"
              alt="Shoes"
            />
            <span>Shoes</span>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-3/12 h-full flex flex-col p-4">
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
          <div className="mt-4">
            <div className="font-bold">Price</div>
            {/* Price filter component goes here */}
          </div>
          <div className="mt-4">
            <div className="font-bold">Color:</div>
            <div className="grid grid-cols-5 w-full gap-2 p-2">
              {colorsList.map((color, index) => (
                <div
                  className="relative flex items-center justify-center size-10 rounded-full group border"
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
        <div className="w-9/12 h-full">
          <div className="grid grid-cols-3 gap-4 p-4">
            {productList.map((product, index) => (
              <div className="relative" key={index}>
                <img src={product.fotograflar[0]} alt={product.name} />
                <div className="bg-red-500 w-auto flex items-center justify-center absolute top-3 left-0 rounded p-1 px-3">
                  {product.tag[0]}
                </div>
                <div className="flex flex-col absolute gap-10 top-10 right-10">
                  <div>
                    <IoBagOutline className="size-6" />
                  </div>
                  <div>
                    <IoIosSearch className="size-6" />
                  </div>
                  <div>
                    <CiHeart className="size-6" />
                  </div>
                  <div>
                    <MdCompareArrows className="size-6" />
                  </div>
                </div>
                <div className="flex absolute bottom-10 left-1/2">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
