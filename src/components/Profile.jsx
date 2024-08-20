export default function Profile() {
  return (
    <div className="bg-white w-[400px] h-full z-50 fixed top-1/2">
      <div className="flex flex-col rounded gap-10">
        <div className="relative">
          <img src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/sing-in.jpg"></img>
          <div className="absolute bottom-0 left-0 p-7 text-2xl">Sign In</div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            {" "}
            <label htmlFor="Name">
              <input
                className="border focus:outline-none w-full h-10 rounded px-2 "
                placeholder="Name*"
                type="text"
              ></input>
            </label>
          </div>
          <div>
            {" "}
            <label htmlFor="Password">
              <input
                className="border focus:outline-none w-full h-10 rounded px-2 "
                placeholder="Password"
                type="password"
              ></input>
            </label>
          </div>
          <div className="flex flex-col w-full items-start justify-center">
            <div>Lost your password?</div>
            <div className="w-36 bg-black h-[2px]"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
