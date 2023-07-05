import Logo from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";
import light_icon from "../assets/icon-light-theme.svg";
import dark_icon from "../assets/icon-dark-theme.svg";
import hide_icon from "../assets/icon-hide-sidebar.svg";

const LeftSideBar = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen drop-shadow border w-[300px] flex flex-col justify-between">
      <div>
        <header className="p-6">
          <img src={Logo} alt="kanban_logo" />
        </header>
      </div>

      <div className="sidebar_body flex flex-col flex-grow justify-between">
        {/* board section   */}
        <div>
          <h3 className="mx-5 text-slate-500 ">ALL BOARDS (3)</h3>
          <div className="boardlist_container">
            <div className="flex flex-row items-center p-3 my-4 drop-shadow mr-5 rounded-r-full bg-[#635FC7]">
              <img className="mx-2" src={boardIcon} alt="board_Icon" />
              <span className="text-white">Platform Launch</span>
            </div>
            <div className="flex flex-row items-center p-3 my-4 mr-5">
              <img className="mx-2" src={boardIcon} alt="board_Icon" />
              <span className="text-slate-500 font-semibold">
                Marketing Plan
              </span>
            </div>
            <div className="flex flex-row items-center p-3 my-4 mr-5">
              <img className="mx-2" src={boardIcon} alt="board_Icon" />
              <span className="text-slate-500 font-semibold">Road Map</span>
            </div>
          </div>

          <div className="flex flex-row items-center p-3 my-4 mr-5 text-[#635FC7]">
            <img className="mx-2" src={boardIcon} alt="board_Icon" />
            <span className="font-semibold">+ Create New Board</span>
          </div>
        </div>

        <div>
          {/* night mode/light mode */}
          <div className="flex flex-row items-center justify-around border-none mx-5 bg-[#F4F7FD] rounded p-4">
            <div>
              <img className="h-6" src={light_icon} alt="light_icon" />
            </div>
            <div className="flex items-center justify-center">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" id="toggleB" className="sr-only" />
                  <div className="block bg-gray-600 w-14 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-4 rounded-full transition"></div>
                </div>
              </label>
            </div>
            <div>
              <img className="h-6" src={dark_icon} alt="dark_icon" />
            </div>
          </div>

          {/* hide sidebar */}
          <div className="flex flex-row items-center p-4">
            <div className="mx-3">
              <img src={hide_icon} alt="hide_sidebar" />
            </div>
            <span className="text-bold text-slate-400">Hide Sidebar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
