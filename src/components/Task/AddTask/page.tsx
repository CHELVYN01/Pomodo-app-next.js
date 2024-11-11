"use client";
import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import InputTask from "../InputTask/page";

function AddTaks() {
  const [showInputTask, setShowInputTask] = useState(false);

  const toggleInputTask = () => {
    setShowInputTask(!showInputTask);
  };
  return (
    <>
      <main className="  w-[609px] h-[818px] bg-[#212642] m-[92px] rounded-[20px] p-[46px] px-[47px]">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className=" text-white font-title flex text-[47px]  justify-start   ">
              Task
            </h1>
            <h2 className="text-lg font-text font-medium">
              seleck a task for you session
            </h2>
          </div>
          <button
            className="bg-[#3A4960]  p-2 rounded-md"
            onClick={toggleInputTask}
          >
            <FaPlus />
          </button>
        </div>
        {showInputTask && (
          <div className=" mt-12 ">
            <InputTask />
          </div>
        )}
      </main>
    </>
  );
}

export default AddTaks;
