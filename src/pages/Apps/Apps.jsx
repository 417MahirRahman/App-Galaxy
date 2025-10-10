import React from "react";
import { Outlet } from "react-router";

const Apps = () => {
  return (
    <div className="flex-grow">
      <Outlet></Outlet>
    </div>
  );
};

export default Apps;
