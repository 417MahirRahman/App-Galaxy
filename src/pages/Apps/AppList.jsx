import React, { useEffect, useState } from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { useNavigate, useLoaderData } from "react-router";

const AppList = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [displayedApps, setDisplayedApps] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, apps]);

  return (
    <div>
      <div className="text-center p-5 space-y-2">
        <h1 className="text-[#001931] font-bold text-2xl xl:text-5xl">
          Our All Applications{" "}
        </h1>
        <p className="text-[#627382] text-sm lg:text-lg">
          Explore All Apps on the Market developed by us. We code for Millions{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-5 md:justify-between md:items-center md:p-10 space-y-3 md:space-y-0">
        <div>
          <h1 className="font-bold text-sm lg:text-xl">
            <span>{`(${apps.length})`}</span> Apps Found
          </h1>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div>
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : displayedApps.length === 0 ? (
          <div className="text-center text-xl text-gray-500 mt-10">
            No app Found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 lg:p-5 xl:p-7 gap-10 lg:gap-5 py-5 cursor-pointer">
            {displayedApps.map((app) => (
              <div
                key={app.id}
                onClick={() => {
                  navigate(`/apps/${app.id}`);
                  window.scrollTo(0, 0);
                }}
                className="card bg-base-100 w-full shadow-xl p-7"
              >
                <figure className="">
                  <img
                    className="w-full h-[150px] lg:h-[250px] object-cover"
                    src={app.image}
                    alt={app.title}
                  />
                </figure>
                <div className="border-t-2 mt-5 w-full"></div>
                <div className="card-body">
                  <h2 className="card-title font-bold">{app.title}</h2>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center gap-2 font-bold">
                      <img className="w-[20px]" src={download} alt="" />
                      {app.downloads}
                    </div>
                    <div className="flex items-center justify-center gap-2 font-bold">
                      <img className="w-[20px]" src={rating} alt="" />
                      {app.ratingAvg}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppList;
