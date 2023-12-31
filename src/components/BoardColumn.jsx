import React from "react";
import TaskSummary from "./TaskSummary";

const BoardColumn = ({ columns }) => {
  console.log(columns);

  return (
    <div className="flex flex-grow flex-row overflow-auto">
      {columns.map((column) => (
        <main
          key={column.name}
          className="bg-dark-light flex-grow flex flex-col p-3 min-w-[280px]"
        >
          <div className="flex flex-col flex-grow max-w-[280px]">
            <div className="flex flex-row items-center">
              <div className="h-5 w-5 rounded-full mx-3 bg-green-400"></div>
              <h1 className="text-light-grey">{`${column.name}`}</h1>
            </div>

            {/* TASK CONTAINER */}
            <TaskSummary tasks={column.tasks} />
          </div>
        </main>
      ))}
    </div>
  );
};

export default BoardColumn;
