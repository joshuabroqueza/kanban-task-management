import React from "react";
import dottedIcons from "../assets/icon-vertical-ellipsis.svg";
import Logo_mobile from "../assets/logo-mobile.svg";

const RightSideBar = () => {
  return (
    <div className="w-full flex flex-col h-screen">
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
    </div>
  );
};

export default RightSideBar;
