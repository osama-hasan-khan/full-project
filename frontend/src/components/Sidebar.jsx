import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { FaCube } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const Menus = [
    { title: "Home", path: "/", src: <AiFillHome /> },
    { title: "Dashboard", path: "/dashboard", src: <RiDashboardLine /> },
    { title: "Create Ticket", path: "/create-ticket", src: <IoTicket /> },
  ];

  const location = useLocation();

  return (
    <div className="w-52 border-r-2">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ type: "spring" }}
        className="flex items-center justify-center mt-3"
      >
        <FaCube className="text-4xl" />
      </motion.div>

      <ul className="mt-20 p-2">
        {Menus.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <li
              className={`flex items-center gap-x-3 px-2 py-1 font-semibold cursor-pointer rounded-md
                         ${
                           location.pathname === menu.path &&
                           "bg-blue-600 text-white"
                         }`}
            >
              <span
                className={`${location.pathname === menu.path && "text-white"}`}
              >
                {menu.src}
              </span>
              <span>{menu.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
