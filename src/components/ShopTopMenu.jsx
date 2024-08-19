import { useNavigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
export default function ShopTopMenu() {
  const { categories } = useFetchProducts();
  const navigate = useNavigate();

  const handleProductClick = (categoryName) => {
    console.log("tıklama oldu");
    navigate(`/shop/${categoryName}`);
  };
  return (
    <div className="w-full h-[480px] relative ">
      <div className="absolute">
        <img
          src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/lookbook-3.jpg"
          alt="Lookbook"
        />
      </div>
      <div className="absolute flex items-center justify-center w-full gap-10 bottom-0">
        {categories.map((category, index) => (
          <div
            onClick={() => handleProductClick(category.name)}
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img
              className="rounded-full hover:scale-90 duration-700"
              src={category.image}
              alt={category.name}
            />
            <span>{category.name} </span>
          </div>
        ))}
      </div>
    </div>
  );
}
