import dottedIcons from "../assets/icon-vertical-ellipsis.svg";
import Logo_mobile from "../assets/logo-mobile.svg";
import Tasks from "./Tasks";

import React from "react";

const RightSideBar = ({ selectedGroups }) => {
  console.log(selectedGroups);
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* header */}
      <div className="flex flex-row justify-between items-center shadow-sm p-5">
        <div className="flex flex-row justify-center items-center">
          <header className="p-3">
            <img src={Logo_mobile} alt="kanban_logo" />
          </header>
          <h2 className="text-bold text-xl">Platform Launch</h2>
        </div>

        <div className="flex flex-row items-center">
          <button className="text-white bg-[#635FC7] rounded-full px-6 py-2 flex shadow-md hover:shadow-xl active:scale-90 transition duration-150 ">
            <span>+</span> <span className="hidden md:flex"> Add New Task</span>
          </button>
          <button className="px-3">
            <img src={dottedIcons} alt="dottedIcons" />
          </button>
        </div>
      </div>

      {/* main content */}

      {selectedGroups.length > 0 ? (
        // <Tasks selectedGroups={selectedGroups} />
        <div className="flex flex-row overflow-auto bg-[#F4F7FD]">
          <div className="column_container h-screen outline outline-purple-700 w-[300px] m-2 flex-shrink-0">
            <div className="flex flex-row items-center m-2 p-3">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="p-3 text-slate-500">T O D O ( 4 )</div>
            </div>
            <div className="task_container">
              <div className="w-full my-2 p-2 h-[66px] border rounded bg-white drop-shadow">
                <h3>treer</h3>
                <p className="text-sm text-slate-500">substasks</p>
              </div>
              <div className="w-full my-2 p-2 h-[66px] border rounded bg-white drop-shadow">
                <h3>treer</h3>
                <p className="text-sm text-slate-500">substasks</p>
              </div>
            </div>
          </div>
          <div className="column_container h-screen outline outline-purple-700 w-[300px] m-2 flex-shrink-0">
            <div className="flex flex-row items-center m-2 p-3">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="p-3 text-slate-500">T O D O ( 4 )</div>
            </div>
            <div className="task_container">
              <div className="w-full my-2 p-2 h-[66px] border rounded bg-white drop-shadow">
                <h3>treer</h3>
                <p className="text-sm text-slate-500">substasks</p>
              </div>
              <div className="w-full my-2 p-2 h-[66px] border rounded bg-white drop-shadow">
                <h3>treer</h3>
                <p className="text-sm text-slate-500">substasks</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-grow items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="p-5 text-slate-400 mx-5 text-center">
              This board is empty. Create a new column to get started.
            </p>
            <button className="text-white bg-[#635FC7] rounded-full px-6 py-3 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
              + Add New Column
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
