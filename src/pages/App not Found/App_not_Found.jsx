import React, { useEffect, useState } from "react";
import app_not_found_logo from "../../assets/App-Error.png";
import { Link } from "react-router";

const App_not_Found = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen gap-5">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <div className="font-bold text-3xl">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-center p-7">
        <img src={app_not_found_logo} alt="" />
      </div>
      <div className="text-center p-5 space-y-3">
        <h1 className="text-[#001931] text-2xl md:text-4xl lg:text-5xl font-bold">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382] text-sm md:text-base lg:text-lg">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to={"/apps"}
          className="btn lg:btn-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default App_not_Found;
