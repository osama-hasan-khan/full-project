import React from "react";
import { GiDiceSixFacesFive } from "react-icons/gi";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-5xl font-bold">Daily Issue's Management</h1>
      <p className="text-xl font-extrabold">
        Discover a better a way to manage Issue's
      </p>

      <Link to="dashboard" className="bg-black p-2 text-white font-mono px-4 uppercase">Start Here</Link>
    </div>
  );
};

export default HomePage;
