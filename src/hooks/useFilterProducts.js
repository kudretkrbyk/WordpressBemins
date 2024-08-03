import { useEffect } from "react";
import {
  filterProductsByPrice,
  filterProductsByColor,
  filterProductsBySize,
} from "../api/api"; // api.js dosyasından import et

const useFilterProducts = (
  productList,
  priceRange,
  selectedColors,
  selectedSizes,
  setFilteredProducts
) => {
  useEffect(() => {
    let filtered = productList;

    filtered = filterProductsByPrice(filtered, priceRange);
    filtered = filterProductsByColor(filtered, selectedColors);
    filtered = filterProductsBySize(filtered, selectedSizes);
    // Kategori filtreleme işlevi eklenebilir

    setFilteredProducts(filtered);
  }, [priceRange, productList, selectedColors, selectedSizes]);
};

export default useFilterProducts;
