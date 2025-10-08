import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div data-theme="light">
      <NavBar></NavBar>
      <div className="">
        <div className="flex items-center justify-center p-7">
          <img src={errorImg} alt="" />
        </div>
        <div className="text-center p-5 space-y-3">
          <h1 className="text-[#001931] text-2xl md:text-4xl lg:text-5xl font-bold">Oops, page not found!</h1>
          <p className="text-[#627382] text-sm md:text-base lg:text-lg">The page you are looking for is not available.</p>
          <a href="" className="btn lg:btn-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]">Go Back!</a>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
