import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"

const NavBar = () => {

  const activeStyle = "text-purple-600 font-bold border-b-2 border-purple-600";
  const normalStyle = "text-black";

  const links = (
    <>
      <div className="font-bold grid gap-3 lg:grid-cols-3 lg:gap-5 lg:text-center lg:text-lg xl:text-xl">
        <div><NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to={"/"}>Home</NavLink></div>
        <div><NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to={"/apps"}>Apps</NavLink></div>
        <div><NavLink  className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to={"/my_installation"}>My Installation</NavLink></div>   
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-10 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center font-extrabold text-sm md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent cursor-pointer gap-2"><img className="w-[40px] h-[40px] hidden lg:block" src={logo} alt="" />App Galaxy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/417MahirRahman" target="_blank" className="btn btn-sm lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold lg:text-lg xl:text-xl"><i className="fa-brands fa-github "></i>Contribute</a>
      </div>
    </div>
  );
};

export default NavBar;
