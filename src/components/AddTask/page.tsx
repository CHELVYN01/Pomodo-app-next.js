import React from "react";

import { FaPlus } from "react-icons/fa6";

function AddTaks() {
  return (
    <>
      <main className="  w-[609px] h-[818px] bg-[#212642] m-[92px] rounded-[20px] p-[46px]">
        <div className="flex justify-between items-center px-[47px]">
          <div>
            <h1 className=" text-white font-judul flex text-[47px]  justify-start bg-slate-500  ">
              Task
            </h1>
            <h2 className="text-lg  font-medium">
              seleck a task for you session
            </h2>
          </div>
          <button className="bg-[#3A4960]  p-2 rounded-md">
            <FaPlus />
          </button>
        </div>
      </main>
    </>
  );
}

export default AddTaks;

// width: 609px;
// height: 818px;
// flex-shrink: 0;
// color: #FFF;
// font-family: Khand;
// font-size: 48px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
