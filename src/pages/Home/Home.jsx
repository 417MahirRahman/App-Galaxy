import Banner1 from "../../components/Banner/Banner1";
import Banner2 from "../../components/Banner/Banner2";
import { Link, useLoaderData, useNavigate } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { useEffect, useState } from "react";

const Home = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();

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

  const handleShowAll = () => {
    navigate("/apps");
    window.scrollTo(0, 0);
  };

  return (
    <div data-theme="light" className="flex-grow">
      <Banner1></Banner1>
      <Banner2></Banner2>

      <div className="text-center p-5 space-y-2">
        <h1 className="text-[#001931] font-bold text-2xl xl:text-5xl">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-sm lg:text-lg">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 lg:p-5 xl:p-7 gap-10 lg:gap-5 py-5 cursor-pointer">
        {apps.map((app) => (
          <div key={app.id}
                onClick={() => {
                  navigate(`/apps/${app.id}`);
                  window.scrollTo(0, 0);
                }} className="card bg-base-100 w-full shadow-xl p-7">
            <figure className="">
              <img
                className="w-full h-[150px] lg:h-[250px]"
                src={app.image}
                alt=""
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
      <div onClick={handleShowAll} className="text-center p-10">
        <Link
          to={"/apps"}
          className="btn lg:btn-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
