import { useNavigate } from "react-router-dom";
export default function ShopTopMenu() {
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
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category.jpg"
            alt="Tops"
          />
          <span onClick={() => handleProductClick("tops")}>Tops</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-4.jpg"
            alt="Shirts"
          />
          <span onClick={() => handleProductClick("tops")}> Shirts</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-2.jpg"
            alt="Glasses"
          />
          <span onClick={() => handleProductClick("tops")}>Glasses</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-5.jpg"
            alt="Sandals"
          />
          <span onClick={() => handleProductClick("tops")}>Sandals</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-3.jpg"
            alt="Bag"
          />
          <span onClick={() => handleProductClick("tops")}>Bag</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            onClick={() => handleProductClick("tops")}
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-1.jpg"
            alt="Shoes"
          />
          <span onClick={() => handleProductClick("tops")}>Shoes</span>
        </div>
      </div>
    </div>
  );
}
