import { IoMdArrowDropdown } from "react-icons/io";
import colorCodes from "../../constraint/colors";
import PropTypes from "prop-types";

export default function ShopPageColorList({
  colorsList,
  handleColorClick,
  colorCount,
}) {
  return (
    <div className="grid grid-cols-5 w-full gap-1 p-2">
      {colorsList.map((color, index) => (
        <div
          className="relative flex items-center justify-center size-10 rounded-full group border border-black cursor-pointer"
          style={{ backgroundColor: colorCodes[color] || "#000000" }} // Default color black if color code not found
          key={index}
          onClick={() => handleColorClick(color)}
        >
          <div className="absolute -top-10 text-blue-500 hidden group-hover:flex items-center justify-center bg-black w-16 h-7 text-nowrap px-10">
            {color} ({colorCount[color] || 0}){" "}
            <div className="absolute top-[10px] left-3 text-black">
              <IoMdArrowDropdown className="size-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ShopPageColorList.propTypes = {
  colorsList: PropTypes.arrayOf(PropTypes.string).isRequired, // colorsList bir dizi olmalı ve her öğesi string olmalı
  handleColorClick: PropTypes.func.isRequired, // handleColorClick bir fonksiyon olmalı ve zorunlu
  colorCount: PropTypes.objectOf(PropTypes.number).isRequired, // colorCount bir nesne olmalı ve her değeri sayı olmalı
};
