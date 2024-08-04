import { useParams } from "react-router-dom";

import useFetchProductById from "../hooks/useFetchProductById";

export default function ProductPage() {
  const { productId } = useParams(); // URL'den ürün ID'sini alır
  const { product, loading, error } = useFetchProductById(productId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.fotograflar[0]} alt={product.name} />
      <p>{product.description}</p>
      {/* Diğer ürün detayları */}
    </div>
  );
}
