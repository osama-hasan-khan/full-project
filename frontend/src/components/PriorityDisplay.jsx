import React from "react";
import { AiTwotoneFire } from "react-icons/ai";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <AiTwotoneFire
        size={22}
        className={` pr-1 ${
          priority > 1 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <AiTwotoneFire
        size={22}
        className={` pr-1 ${
          priority > 2 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <AiTwotoneFire
        size={22}
        className={` pr-1 ${
          priority > 3 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <AiTwotoneFire
        size={22}
        className={` pr-1 ${
          priority > 4 ? " text-red-400" : " text-slate-400"
        }`}
      />
    </div>
  );
};

export default PriorityDisplay;
