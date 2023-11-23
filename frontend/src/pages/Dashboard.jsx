import React, { useEffect, useState } from "react";
import TicketCards from "../components/TicketCards";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/tickets/get`)
      .then((response) => {
        setTickets(response.data);
        setDone(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {tickets.length <= 0 ? (
        <>
          <div className="text-red-500 text-2xl font-extrabold">
            You have no ticket at the moment.
          </div>
          <h1 className="text-slate-600 font-extrabold mt-5 text-xl">
            What are you working on?
          </h1>
          <Link
            to="/create-ticket"
            className="rounded-md w-40 bg-blue-500 p-2 flex gap-1 font-mono text-white mt-5 animate-pulse"
          >
            <AiOutlinePlusCircle size={24} />
            create ticket
          </Link>
        </>
      ) : (
        <>
          {!done ? (
            <>
              <ReactLoading
                type={"bars"}
                color={"#03fc4e"}
                height={100}
                width={100}
              />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold uppercase">
                All Tickets:
              </h1>
              <div className="p-5">
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets.map((ticket) => {
                    return <TicketCards key={ticket.id} ticket={ticket} />;
                  })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
