import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../utility/LocalStorage";
import { useLoaderData } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { Bounce, toast } from "react-toastify";

const My_Installation = () => {
  const apps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    const installed = getFromLocalStorage();
    setInstalledApps(installed);
  }, []);

  useEffect(() => {
    const initial = apps.filter((app) => installedApps.includes(app.id));
    setFilteredApps(initial);
  }, [apps, installedApps]);

  const handleSort = (type) => {
    if (type === "high") {
      const sorted = [...filteredApps].sort((a, b) => b.size - a.size);
      setFilteredApps(sorted);
    } else if (type === "low") {
      const sorted = [...filteredApps].sort((a, b) => a.size - b.size);
      setFilteredApps(sorted);
    }
  };

  const handleUninstall = (id, title) => {
    const stored = getFromLocalStorage();
    const remaining = stored.filter((appId) => appId !== id);
    localStorage.setItem("installed", JSON.stringify(remaining));
    setInstalledApps(remaining);
    toast.success(`${title} Uninstalled`),
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      };
  };
  
  const [loading, setLoading] = useState(true);
  
     useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen gap-5">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="font-bold text-3xl"><h1>Loading</h1></div>
        </div>
      );
    }

  return (
    <div className="bg-base-300 flex-grow">
      <div className="text-center p-5 space-y-2">
        <h1 className="text-[#001931] font-bold text-2xl xl:text-5xl">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-sm lg:text-lg">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="xl:w-7xl md:w-xl mx-auto space-y-3 p-3 lg:p-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">
            {`(${installedApps.length}) Apps found`} 
          </h1>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 bg-white">
              Sort by Size<i className="fa-solid fa-caret-down"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a
                  onClick={() => {
                    handleSort("low");
                  }}
                >
                  Low to High
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSort("high");
                  }}
                >
                  High to Low
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="mb-5 md:w-xl  md:mx-auto xl:w-7xl xl:mx-auto p-3"
          >
            <ul className="list bg-base-300 rounded-box shadow-md">
              <li className="list-row bg-white">
                <div className="">
                  <img className="size-15 object-fill" src={app.image} />
                </div>
                <div className="">
                  <div>
                    <h1 className="text-lg font-bold">{app.title}</h1>
                  </div>
                  <div className="text-sm uppercase font-semibold opacity-60 flex items-center gap-5">
                    <div className="flex items-center md:gap-1">
                      <img
                        className="h-full w-[18px] lg:w-[20px]"
                        src={download}
                        alt=""
                      />
                      <h1>{app.downloads}</h1>
                    </div>
                    <div className="flex items-center md:gap-1">
                      <img
                        className="h-full w-[18px] lg:w-[18px]"
                        src={rating}
                        alt=""
                      />
                      <h1>{app.ratingAvg}</h1>
                    </div>
                    <div className="">{`${app.size} MB`}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn text-sm lg:btn-lg bg-[#00D390] text-[#FFFFFF] font-bold my-auto hidden md:block"
                >
                  Uninstall
                </button>
              </li>
              <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn text-sm lg:btn-lg bg-[#00D390] text-[#FFFFFF] font-bold my-auto md:hidden"
                >
                  Uninstall
                </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Installation;
