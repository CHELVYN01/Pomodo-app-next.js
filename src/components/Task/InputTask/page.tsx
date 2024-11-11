import React from "react";

function InputTask() {
  return (
    <div className="w-[480px] ">
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-[#ab6262] placeholder:text-gray-400  focus:outline-none focus:ring-inset  sm:text-sm/6 bg-transparent"
        type="text"
        placeholder="add task here"
      />
    </div>
  );
}

export default InputTask;
