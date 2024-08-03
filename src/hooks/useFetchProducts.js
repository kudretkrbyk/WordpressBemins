import { useEffect, useState } from "react";
import { fetchProducts } from "../api/api";

const useFetchProducts = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colorCount, setColorCount] = useState([]);
  const [sizeCount, setSizeCount] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000); // Maksimum fiyatı takip et
  const [priceRange, setPriceRange] = useState([0, 1000]); // Fiyat aralığı için state

  useEffect(() => {
    fetchProducts()
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
        setPriceRange([0, maxPrice]);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return {
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
  };
};

export default useFetchProducts;
