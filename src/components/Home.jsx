import React from "react";
import { useReducer } from "react";
import platform_icon from "../assets/logo-mobile.svg";
import dropdown_icon from "../assets/icon-chevron-down.svg";
import plus_icon from "../assets/icon-add-task-mobile.svg";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import board_icon from "../assets/icon-board.svg";
import hide_icon from "../assets/icon-hide-sidebar.svg";
import cross_icon from "../assets/icon-cross.svg";

import Addnewboard from "./Addnewboard";
import Boardlist from "./Boardlist";
import BoardColumn from "./BoardColumn";

const initialState = {
  boards: [
    {
      name: "Platform Launch",
      active: true,
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              title: "Build UI for onboarding flow",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build UI for search",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build settings UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "QA and test all major user journeys",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [
            {
              title: "Design settings and search pages",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add account management endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Design onboarding flow",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add search enpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add authentication endpoints",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              title:
                "Research pricing points of various competitors and trial different business models",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Done",
          tasks: [
            {
              title: "Conduct 5 wireframe tests",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Create wireframe prototype",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "Done",
              subtasks: [
                {
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Review results of usability tests and iterate",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "Done",
              subtasks: [
                {
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Market discovery",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "Done",
              subtasks: [
                {
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Competitor analysis",
              description: "",
              status: "Done",
              subtasks: [
                {
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Research the market",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "Done",
              subtasks: [
                {
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Marketing Plan",
      active: false,
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              title: "Plan Product Hunt launch",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Find hunter",
                  isCompleted: false,
                },
                {
                  title: "Gather assets",
                  isCompleted: false,
                },
                {
                  title: "Draft product page",
                  isCompleted: false,
                },
                {
                  title: "Notify customers",
                  isCompleted: false,
                },
                {
                  title: "Notify network",
                  isCompleted: false,
                },
                {
                  title: "Launch!",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Share on Show HN",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Draft out HN post",
                  isCompleted: false,
                },
                {
                  title: "Get feedback and refine",
                  isCompleted: false,
                },
                {
                  title: "Publish post",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Write launch article to publish on multiple channels",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Write article",
                  isCompleted: false,
                },
                {
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                },
                {
                  title: "Publish on Inndie Hackers",
                  isCompleted: false,
                },
                {
                  title: "Publish on Medium",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Doing",
          tasks: [],
        },
        {
          name: "Done",
          tasks: [],
        },
      ],
    },
    {
      name: "Roadmap",
      active: false,
      columns: [
        {
          name: "Now",
          tasks: [
            {
              title: "Launch version one",
              description: "",
              status: "",
              subtasks: [
                {
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                },
                {
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Review early feedback and plan next steps for roadmap",
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: "",
              subtasks: [
                {
                  title: "Interview 10 customers",
                  isCompleted: false,
                },
                {
                  title: "Review common customer pain points and suggestions",
                  isCompleted: false,
                },
                {
                  title: "Outline next steps for our roadmap",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Next",
          tasks: [],
        },
        {
          name: "Later",
          tasks: [],
        },
      ],
    },
  ],

  // 'loading', 'error', 'ready', 'active', 'finished'
  activeBoard: null,
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "selectedBoard":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "ACTIVE_BOARD":
      // Find the active board in the boards array

      return {
        ...state,
        activeBoard: getActiveBoard, // Set the activeBoard in the state
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unkonwn");
  }
}

const Home = () => {
  const [{ boards, activeBoard }, dispatch] = useReducer(reducer, initialState);

  const getActiveBoard = boards.find((board) => board.active === true);

  console.log(getActiveBoard);

  return (
    <div className="flex flex-col min-h-screen outline">
      <header className="sticky top-0 z-10 p-4 h-16 md:h-20 flex flex-row justify-between md:justify-normal items-center bg-white border drop-shadow-sm shadow-lg shadow-semi-purple">
        {/* LOGO SECTION */}
        <div className="flex flex-row items-center md:w-1/3 lg:max-w-[21vh]">
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
            <select
              className="text-xl font-semibold focus:outline-none cursor-pointer"
              name="board"
            >
              {boards.map((board_child) => (
                <option
                  className="inline-block"
                  key={board_child.name}
                  value={board_child.name}
                >
                  {board_child.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ADD TASK SECTION */}
        <div className="flex flex-row items-center md:flex-grow md:justify-end">
          <button className="flex flex-row items-center px-3 py-2 bg-purple rounded-full mx-3 shadow-md hover:shadow-xl active:scale-90 transition duration-300">
            <img className="md:p-3 p-1" src={plus_icon} alt="+" />
            <span className="text-white pr-2 hidden md:flex">Add New Task</span>
          </button>

          <button className="shadow-md hover:shadow-xl active:scale-90 transition duration-300">
            <img src={ellipsis} alt="ellipsis" />
          </button>
        </div>
      </header>

      <div className="flex-grow flex flex-row overflow-x z-99">
        {/* LEFT SIDE BAR */}
        <Boardlist />
        {/* MAIN BOARD  */}
        {!getActiveBoard && <Addnewboard />}

        {/* DISPLAY ACTIVE BOARD */}

        <BoardColumn columns={getActiveBoard.columns} />
      </div>

      <div className="edit_task">
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <form className="flex flex-col justify-around px-4 py-8 rounded-md items-center bg-white mx-4 w-[343px] md:w-[480px]">
            <div className="w-full">
              <h1 className="font-semibold">Add New Task</h1>

              <div className="flex flex-col my-2">
                <label
                  className="text-light-grey text-sm font-semibold"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="border p-2 rounded my-2 placeholder:text-sm text-sm"
                  placeholder="e.g Take a coffee break"
                />
              </div>

              <div className="flex flex-col my-2">
                <label
                  className="text-light-grey text-sm font-semibold"
                  htmlFor="title"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="border p-2 rounded my-2 placeholder:text-sm text-sm"
                  placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                />
              </div>

              <div className="flex flex-col my-2">
                <label
                  className="text-light-grey text-sm font-semibold"
                  htmlFor="title"
                >
                  Subtasks
                </label>
                <div className="subtask_container">
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="border p-2 rounded my-2 placeholder:text-sm text-sm flex-grow px-3"
                      placeholder="e.g. Make Coffee"
                    />
                    <button className="mx-2">
                      <img src={cross_icon} alt="cross_icon" />
                    </button>
                  </div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="border p-2 rounded my-2 placeholder:text-sm text-sm flex-grow px-3"
                      placeholder="e.g. Drink coffee & smile"
                    />
                    <button className="mx-2">
                      <img src={cross_icon} alt="cross_icon" />
                    </button>
                  </div>
                  <div>
                    <button className="bg-dark-light w-full rounded-full py-2 text-sm drop-shadow-md shadow-sm text-purple font-semibold">
                      + Add New Subtask
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-2">
                <h3 className="my-2 text-sm font-semibold text-light-grey">
                  Status
                </h3>
                <select className="border w-full px-2 py-2 rounded">
                  <option value="">Doing</option>
                  <option value="">Todo</option>
                  <option value="">Done</option>
                </select>
              </div>
              <button className="text-white-smoke w-full rounded-full py-2 text-sm shadow-sm drop-shadow-md bg-purple font-semibold">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
