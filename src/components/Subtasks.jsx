import React from "react";

const Subtasks = ({ subtasks }) => {
  let subtask_count = subtasks.length;

  const subtask_completed = subtasks.filter(
    (item) => item.isCompleted === true
  );

  return (
    <p className="text-xs font-semibold text-light-grey my-1">
      {subtask_completed.length} of {subtask_count} substasks
    </p>
  );
};

export default Subtasks;
