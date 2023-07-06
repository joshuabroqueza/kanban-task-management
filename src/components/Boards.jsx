import React, { useState } from "react";
import boardIcon from "../assets/icon-board.svg";

const Boards = ({ boards }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (name) => {
    setSelectedBoard(name);
  };

  return (
    <div>
      <h3 className="mx-5 text-slate-500 ">ALL BOARDS (3)</h3>
      <div className="boardlist_container">
        {boards.map((board) => (
          <div
            key={board.name}
            className={`flex hover:cursor-pointer flex-row items-center p-3 my-4 mr-5 ${
              selectedBoard === board.name
                ? "bg-[#635FC7] rounded-r-full drop-shadow"
                : ""
            }`}
            onClick={() => handleBoardClick(board.name)}
          >
            <img className="mx-2" src={boardIcon} alt="board_Icon" />
            <span
              className={`text-slate-500 font-semibold ${
                selectedBoard === board.name ? "text-white" : ""
              }`}
            >
              {board.name}
            </span>
          </div>
        ))}
        <button className="flex hover:cursor-pointer flex-row items-center p-3 my-4 mr-5 text-[#635FC7]">
          <img className="mx-2" src={boardIcon} alt="board_Icon" />
          <span className="font-semibold">+ Create New Board</span>
        </button>
      </div>
    </div>
  );
};

export default Boards;
