export default function Profile() {
  return (
    <div className=" w-full h-full  shadow-3xl z-50 ">
      <div className="filtre w-full h-full bg-black fixed top-0 left-0 z-40 opacity-40"></div>
      <div className="profile-content bg-white flex flex-col w-[500px] h-ful fixed top-32 left-1/3 rounded gap-7 z-50 b overflow-hidden">
        <div className="relative z-50">
          <img src="https://wpbingosite.com/wordpress/bemins/wp-content/uploads/2024/02/sing-in.jpg"></img>
          <div className="absolute bottom-0 left-0 p-7 text-2xl">Sign In</div>
        </div>
        <div className="flex flex-col gap-">
          {" "}
          <div className="flex flex-col gap-3 z-50 px-5">
            <div className="z-50 ">
              <label htmlFor="Name">
                <input
                  className="border focus:outline-none w-full h-10 rounded px-2 bg-blue-100 "
                  placeholder="Name*"
                  type="text"
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="Password">
                <input
                  className="border focus:outline-none w-full h-10 rounded px-2 bg-blue-100 "
                  placeholder="Password"
                  type="password"
                ></input>
              </label>
            </div>
            <div className="flex flex-col w-full items-start justify-center group z-50">
              <div className="group-hover:text-[#54d9e1] duration-300 w-36">
                Lost your password?
                <div className="flex items-center justify-center">
                  <div className="w-36 bg-black h-[2px] group-hover:bg-[#54d9e1] group-hover:w-20 duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-5 z-50 p-10">
            <div className="z-50">
              <button className="w-full text-white bg-black p-2 rounded hover:bg-[#54d9e1]  duration-300">
                Sign In
              </button>
            </div>
            <div className="z-50">
              <button className="w-full text-white  bg-[#0009] p-2 rounded hover:bg-[#54d9e1]  duration-300">
                Create An Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
