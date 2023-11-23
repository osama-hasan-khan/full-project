import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-1 h-screen">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-x-hidden">
          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
