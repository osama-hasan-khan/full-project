import React, { useState } from "react";
import axios from "axios";
import { IoMdCreate } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveTicket = () => {
    axios
      .post(`http://localhost:4000/api/tickets/post`, formData)
      .then(() => navigate("/dashboard"))
      .catch((error) => console.log(error));
  };

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];

  return (
    <>
      <div className="flex flex-row justify-between pl-6 pr-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-extrabold">Enter Tickets Details</h3>
          <h4 className="font-bold">
            Please fill out all the details
          </h4>
        </div>
        <div className="flex flex-col gap-3 w-5/12 p-5">
          <span className="text-black font-bold">Title</span>
          <input
            id="title"
            name="title"
            type="text"
            required={true}
            className="outline-none text-black p-2 w-[100%] rounded border"
            onChange={handleChange}
            value={formData.title}
          />

          <span className="text-black font-bold">Description</span>
          <textarea
            id="description"
            name="description"
            className="outline-none text-black p-2 w-[100%] rounded border"
            required={true}
            rows="5"
            onChange={handleChange}
            value={formData.description}
          />

          <span className="text-black font-bold">Category</span>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="text-black px-2 py-1 font-bold w-[80%]"
          >
            {categories?.map((category, _index) => (
              <option key={_index} value={category} className="text-black">
                {category}
              </option>
            ))}
          </select>

          <span className="font-bold text-black">Priority</span>
          <div className="">
            <input
              id="priority-1"
              name="priority"
              type="radio"
              value={1}
              checked={formData.priority == 1}
              onChange={handleChange}
            />
            <span>1</span>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              value={2}
              checked={formData.priority == 2}
              onChange={handleChange}
            />
            <span>2</span>
            <input
              id="priority-3"
              name="priority"
              type="radio"
              value={3}
              checked={formData.priority == 3}
              onChange={handleChange}
            />
            <span>3</span>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              value={4}
              checked={formData.priority == 4}
              onChange={handleChange}
            />
            <span>4</span>
            <input
              id="priority-5"
              name="priority"
              type="radio"
              value={5}
              checked={formData.priority == 5}
              onChange={handleChange}
            />
            <span>5</span>
          </div>

          <span className="font-bold text-black">Progress</span>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handleChange}
          />

          <span className="text-black font-bold">Status</span>
          <select
            name="status"
            value={formData.status}
            className="text-black px-2 py-1 w-[50%] font-serif font-bold"
            onChange={handleChange}
          >
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
          <button
            type="submit"
            className="hover:no-underline bg-[#0084d4] 
           text-[#fff] font-bold cursor-pointer 
            hover:bg-[#009fff] mt-4 rounded p-3"
            onClick={saveTicket}
          >
            Create Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
