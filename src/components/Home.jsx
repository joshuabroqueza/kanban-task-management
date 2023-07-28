import React from "react";
import platform_icon from "../assets/logo-mobile.svg";
import dropdown_icon from "../assets/icon-chevron-down.svg";
import plus_icon from "../assets/icon-add-task-mobile.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import board_icon from "../assets/icon-board.svg";
import hide_icon from "../assets/icon-hide-sidebar.svg";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen outline">
      <header className="p-4 h-16 md:h-20 flex flex-row justify-between md:justify-normal items-center bg-white border drop-shadow-sm shadow-lg shadow-semi-purple">
        {/* LOGO SECTION */}
        <div className="flex flex-row items-center md:w-1/3">
          <img src={platform_icon} alt="icon" />
          <h1 className="text-2xl font-bold mx-3 hidden md:flex">kanban</h1>
        </div>

        {/* GROUP SECTION */}
        <div className="flex flex-row items-center">
          {/* SELECTED GROUP */}
          <div className="hidden md:flex">
            <h1 className="mx-3 text-2xl font-semibold">Platform Launch</h1>
          </div>
          <div className="small_screen md:hidden flex flex-row items-center">
            {/* GROUP CONTAINER */}
            <div className="mx-3 text-2xl font-semibold">Platform Launch</div>
            <button className="shadow-md hover:shadow-xl active:scale-90 transition duration-300">
              <img className="h-2" src={dropdown_icon} alt="dropdown" />
            </button>
          </div>
        </div>

        {/* ADD TASK SECTION */}
        <div className="flex flex-row items-center md:flex-grow md:justify-end">
          <button className="flex flex-row items-center px-3 py-2 bg-purple rounded-full mx-3 shadow-md hover:shadow-xl active:scale-90 transition duration-300">
            <img className="p-3" src={plus_icon} alt="+" />
            <span className="text-white pr-2 hidden md:flex">Add New Task</span>
          </button>

          <button className="shadow-md hover:shadow-xl active:scale-90 transition duration-300">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
      </header>

      <div className="flex-grow flex flex-row">
        <main className="w-1/3 lg:max-w-[25vh] hidden bg-white border-2 flex-grow md:flex flex-col">
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
        <main className="flex-grow bg-dark-light flex flex-col md:flex-row justify-center items-center bg-semi-light">
          <div className="home_content flex flex-col justify-center items-center py-4 px-4">
            <div className="">
              <p className="text-semi-grey font-semibold text-center text-xl my-3">
                This board is empty. Create a new column to get started.
              </p>
            </div>
            <div>
              <button className="bg-purple px-4 py-3  rounded-full text-white my-3 shadow-md hover:shadow-xl active:scale-90 transition duration-300">
                + Add new Column
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
