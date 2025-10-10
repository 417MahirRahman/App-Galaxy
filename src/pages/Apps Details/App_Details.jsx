import { useLoaderData } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utility/LocalStorage";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

const App_Details = () => {
  const app = useLoaderData();

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const installed = getFromLocalStorage();
    setInstalledApps(installed);
  }, []);

  const handleInstallBtn = (id, title) => {
    setToLocalStorage(id);
    setInstalledApps(getFromLocalStorage());
    toast.success(`${title} Installed Successfully`),
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

  const handleInstalledBtn = (title) => {
    toast.warn(`${title} is already installed`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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
    <div className="md:p-10">
      {/* App-info Part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 card card-side bg-base-100 shadow-sm xl:space-x-5 p-5">
        <figure className="rounded-xl lg:col-span-1 shadow-xl">
          <img
            className="w-[200px] md:w-[250px] lg:w-[280px] xl:w-[300px] h-full py-5"
            src={app.image}
            alt=""
          />
        </figure>
        <div className="w-full md:p-5 lg:col-span-2">
          <div className="space-y-5">
            <div className="xl:space-y-2">
              <h1 className="text-2xl xl:text-5xl font-bold">{app.title}</h1>
              <p className="text-sm p-1 text-[#627382]">{app.companyName}</p>
              <div className="border-t-2 border-gray-400"></div>
            </div>
            <div className="flex space-x-12 xl:space-x-10">
              <div className="flex flex-col items-center">
                <img className="w-[25px] h-[25px]" src={download} alt="" />
                <p className="font-semibold text-sm">Download</p>
                <h1 className="font-semibold text-sm">{app.downloads}</h1>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[25px] h-[25px]" src={rating} alt="" />
                <p className="font-semibold text-sm">Ratings</p>
                <h1 className="font-semibold text-sm">{app.ratingAvg}</h1>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[25px] h-[25px]" src={review} alt="" />
                <p className="font-semibold text-sm">Reviews</p>
                <h1 className="font-semibold text-sm">{app.reviews}</h1>
              </div>
            </div>
            <div>
              {installedApps.includes(app.id) ? (
                <button
                  onClick={() => handleInstalledBtn(app.title)}
                  className="btn mt-2 cursor-pointer"
                >
                  Installed
                </button>
              ) : (
                <button
                  className="btn lg:btn-lg bg-[#00D390] text-[#FFFFFF] font-bold"
                  onClick={() => handleInstallBtn(app.id, app.title)}
                >
                  {`Install Now ( ${app.size} ) MB`}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rating-Part */}
      <div className="w-11/12 mx-auto md:w-full border-t-2 border-gray-400 mt-15"></div>
      <div>
        <div className="p-5">
          <h1 className="text-black font-bold text-xl">Ratings</h1>
        </div>

        <div style={{ width: "100%", height: "300px" }} className="p-3">
          <ResponsiveContainer>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={app.ratings}
              margin={{
                top: 20,

                bottom: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" reversed={true} />
              <Tooltip />

              <Bar dataKey="count" barSize={20} fill="#FF8811" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Description-Part */}
        <div className="w-11/12 mx-auto md:w-full border-t-2 border-gray-400"></div>
        <div className="p-5 space-y-3">
          <h1 className="text-black font-bold text-xl">Description</h1>
          <p className="md:text-justify">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default App_Details;
