export default function Shop() {
  return (
    <div className="w-full  flex flex-col  ">
      <div className="w-full h-[480px] relative border border-red-500 overflow-hidden">
        <div className="absolute">
          <img src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/lookbook-3.jpg"></img>
        </div>
        <div className="absolute flex items-center justify-center w-full gap-10 bottom-0">
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
      <div className="w-full flex">
        <div className="bg-red-500 w-3/12 h-full">dd</div>
        <div className="bg-blue-500 w-9/12 h-full">dd</div>
      </div>
    </div>
  );
}
