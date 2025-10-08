import React from "react";

const My_Installation = () => {
  return (
    <div className="bg-base-300">
      <div className="text-center p-5 space-y-2">
        <h1 className="text-[#001931] font-bold text-2xl xl:text-5xl">Your Installed Apps</h1>
        <p className="text-[#627382] text-sm lg:text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="xl:w-7xl mx-auto space-y-3 p-2 lg:p-7">
        <div className="flex justify-between items-center">
          <h1>1 App found</h1>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 bg-white">
              Sort by Size<i className="fa-solid fa-caret-down"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Low to High</a>
              </li>
              <li>
                <a>High to Low</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="list bg-base-300 rounded-box shadow-md space-y-3">
            <li className="list-row bg-white">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                />
              </div>
              <div>
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <button className="btn btn-primary">
                Uninstall
              </button>   
            </li>
            <li className="list-row bg-white">
              <div>
                <img
                  className="size-10 rounded-box"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                />
              </div>
              <div>
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <button className="btn btn-primary">
                Uninstall
              </button>   
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default My_Installation;
