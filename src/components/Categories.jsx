export default function Categories() {
  return (
    <div className="w-full p-4 flex flex-col">
      <div className="w-full flex items-center justify-center">
        <span>Shop By Categories</span>
      </div>
      <div className="flex items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category.jpg"
          ></img>
          <span>Tops</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-4.jpg"
          ></img>
          <span>Shirts</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-2.jpg"
          ></img>
          <span>Glasses</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-5.jpg"
          ></img>
          <span>Sandals</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-3.jpg"
          ></img>
          <span>Bag</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="rounded-full hover:scale-90 duration-700"
            src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2023/11/category-1.jpg"
          ></img>
          <span>Shoes</span>
        </div>
      </div>
    </div>
  );
}
