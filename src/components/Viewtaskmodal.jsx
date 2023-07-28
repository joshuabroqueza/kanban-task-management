import React from "react";

import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const Viewtaskmodal = () => {
  return (
    <div className="view_task">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div className="flex flex-col justify-around px-4 py-8 rounded-md items-center bg-white mx-4 w-[343px] md:w-[480px]">
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-bold py-2">
                Research pricing points of various competitors and trial
                different business models
              </h1>
              <button className="mx-4">
                <img className="h-5 w-3" src={ellipsis} alt="ellipsis" />
              </button>
            </div>
            <p className="text-xs text-light-grey py-2">
              We know what we're planning to build for version one. Now we need
              to finalise the first pricing model we'll use. Keep iterating the
              subtasks until we have a coherent proposition.
            </p>

            <h3 className="text-sm font-semibold py-2 text-light-grey">
              Subtasks (3)
            </h3>

            <div>
              <div className="flex flex-row bg-dark-light py-2 px-2">
                <input className="mx-3" type="checkbox" />
                <p className="text-xs">
                  Research competitor pricing and business models
                </p>
              </div>
            </div>

            <div>
              <h3 className="my-2 text-sm font-semibold text-light-grey">
                Current Status
              </h3>
              <select className="border w-full px-2 py-2 rounded">
                <option value="">Doing</option>
                <option value="">Todo</option>
                <option value="">Done</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewtaskmodal;
