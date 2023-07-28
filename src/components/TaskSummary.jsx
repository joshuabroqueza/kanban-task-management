import React from "react";
import Subtasks from "./Subtasks";

const TaskSummary = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.title}
          className="h-[88px] flex flex-col justify-center border shadow-lg drop-shadow-sm rounded-xl my-3 py-2 px-4 bg-white"
        >
          <h1 className="text-bold text-sm truncate">{task.title}</h1>

          <Subtasks subtasks={task.subtasks} />
        </div>
      ))}
    </div>
  );
};

export default TaskSummary;
