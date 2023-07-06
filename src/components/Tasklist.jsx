import React from "react";

const Tasklist = ({ listOfTask }) => {
  console.log(listOfTask);
  return (
    <div>
      {listOfTask.map((tasks) => (
        <div
          key={tasks.title}
          className="rounded border p-3 m-3 drop-shadow shadow-md"
        >
          <h3>{tasks.title}</h3>
          <p className="text-sm text-slate-500">
            {tasks.subtasks.length} substasks
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
