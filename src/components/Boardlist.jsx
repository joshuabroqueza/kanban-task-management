import React from "react";
import board_icon from "../assets/icon-board.svg";
import hide_icon from "../assets/icon-hide-sidebar.svg";

const Boardlist = () => {
  return (
    <main className="w-1/3 min-w-[33vw] max-h-screen sticky top-0 left-0 lg:min-w-[25vw] lg:max-w-[25vh] md:max-w-1/3 hidden bg-white border-2 flex-grow md:flex flex-col">
      <div className="sidebar_content flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-semi-grey font-semibold text-sm my-3 py-4 px-4">
            ALL BOARDS (3)
          </h1>

          {/* BOARD LIST */}
          <div className="">
            <div className="flex w-[90%] px-4 items-center my-3 font-semibold text-sm cursor-pointer text-light-grey hover:shadow-purple/50  hover:shadow-md hover:bg-purple hover:text-white py-3 rounded-r-full">
              <img src={board_icon} alt="board_icon" />
              <span className="px-2">Platform Launch</span>
            </div>
            <div className="flex w-[90%] px-4 items-center my-3 font-semibold text-sm cursor-pointer text-light-grey hover:shadow-purple/50  hover:shadow-md hover:bg-purple hover:text-white py-3 rounded-r-full">
              <img src={board_icon} alt="board_icon" />
              <span className="px-2">Marketing Plan</span>
            </div>
            <div className="flex w-[90%] px-4 items-center my-3 font-semibold text-sm cursor-pointer text-light-grey hover:shadow-purple/50  hover:shadow-md hover:bg-purple hover:text-white py-3 rounded-r-full">
              <img src={board_icon} alt="board_icon" />
              <span className="px-2">Roadmap</span>
            </div>
          </div>

          {/* CREATE NEW BOARD BUTTON */}
          <div>
            <button className="flex justify-center items-center px-4 my-3 text-purple font-semibold  text-sm cursor-pointer">
              <img src={board_icon} alt="board_icon" />
              <span className="px-2 text-purple"> + Create New Board</span>
            </button>
          </div>
        </div>

        {/* HIDE SECTION */}
        <div className="flex items-center px-3 py-3 my-2 cursor-pointer">
          <img className="px-2" src={hide_icon} alt="hide_icon" />
          <span className="px-2 text-light-grey">Hide Sidebar</span>
        </div>
      </div>
    </main>
  );
};

export default Boardlist;
