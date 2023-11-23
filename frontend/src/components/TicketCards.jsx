import React from "react";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock ";
import { Link } from "react-router-dom";
import ProgressDisplay from "./ProgressDisplay ";
import StatusDisplay from "./StatusDisplay";
import { RxCross2 } from "react-icons/rx";
import { HiPlus } from "react-icons/hi";

const TicketCards = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <>
      <div className="flex flex-col p-3 m-3 bg-slate-100 h-fit border-[3px] shadow-xl cursor-pointer rounded-md uppercase font-extrabold">
      <Link className="flex items-center bg-slate-50 gap-2">
        <HiPlus />
        <span>Create Ticket</span>
      </Link>
        <h1 className="text-purple-900 font-bold">Your Featured Ticket</h1>
        <h2 className="text-yellow-700 font-extrabold">Subject Matter</h2>
        <div className="flex flex-row justify-between border-2 border-slate-400 p-1 rounded my-2">
          <span className="text-slate-600 font-bold">Delete Your Ticket</span>
          <RxCross2 size={24} className="rounded-full bg-slate-200 p-1" />
        </div>
        <div className="flex flex-row justify-between mb-6">
          <div className="flex flex-col">
            <h1 className="font-bold">Your Priority</h1>
            <PriorityDisplay priority={ticket.priority} />
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="">Delete your ticket</h1>
            <DeleteBlock id={ticket._id} />
          </div>
        </div>

        <Link to={`/ticketPage/${ticket._id}`}>
          <h4 className="mb-1 text-black uppercase bg-pink-200 px-2 py-0.5 rounded-xl w-fit">
            {ticket.title}
          </h4>

          <hr class="h-0.5 bg-gray-800"></hr>

          <p className="whitespace-pre-wrap font-normal text-gray-700">
            {ticket.description}
          </p>

          <div className="flex-grow"></div>

          <div className="flex mt-2">
            <div className="flex flex-col">
              <p className="text-xs my-1 text-black font-mono font-bold">
                {createdDateTime}
              </p>
              <ProgressDisplay progress={ticket.progress} />
            </div>

            <div className="ml-auto flex items-end">
              <StatusDisplay status={ticket.status} />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TicketCards;
