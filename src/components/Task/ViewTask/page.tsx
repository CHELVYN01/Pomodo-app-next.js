"use client";
import React, { useState } from "react";
import Image from "next/image";
import ceklistIcon from "../../../../public/icons/ceklist.png";
import { ITask } from "../../../../types/tasks";

interface TaksTodo {
  tasks: ITask[] | null;
}

const ViewTask: React.FC<TaksTodo> = ({ tasks }) => {
  const [selectedTasks, setSelectedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  if (tasks === null) {
    return null;
  }

  const handleSelect = (taskId: string) => {
    setSelectedTasks((prevSelected) => ({
      ...prevSelected,
      [taskId]: !prevSelected[taskId],
    }));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center px-[13px] bg-[#161C36] rounded-md w-[480px] mt-6 h-[47px]"
        >
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={`custom-radio-${task.id}`}
              className="hidden"
              onChange={() => handleSelect(task.id)}
            />
            <div className="custom-radio w-5 h-5 bg-[#212642] rounded-full border-2 border-[#b5655e] flex items-center justify-center">
              {selectedTasks[task.id] && (
                <div className="flex w-12 items-center justify-center">
                  <Image
                    className="w-18"
                    src={ceklistIcon}
                    alt="checked"
                    width={50}
                    height={50}
                  />
                </div>
              )}
            </div>
          </label>
          <div className="p-[10px]">{task?.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
