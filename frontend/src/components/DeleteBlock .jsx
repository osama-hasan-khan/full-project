import axios from "axios";
import React from "react";
import { FcDeleteColumn } from "react-icons/fc";
import { useNavigate } from "react-router";

const DeleteBlock = ({ id }) => {
  const navigate = useNavigate();
  
  const handleDeleteTicket = () => {
    axios
      .delete(`http://localhost:4000/api/tickets/delete/${id}`)
      .then(() => navigate(0))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <FcDeleteColumn
        size={28}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={handleDeleteTicket}
      />
    </>
  );
};

export default DeleteBlock;
