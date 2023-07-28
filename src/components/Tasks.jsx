import Tasklist from "./Tasklist";

const Tasks = ({ selectedGroups }) => {
  return (
    <div className="flex flex-row justify-between h-screen">
      {selectedGroups.map((group) => (
        <div
          key={group.name}
          className="column_container outline outline-purple-700 w-[320px]"
        >
          <div className="flex flex-row items-center  m-3 p-3">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="p-3 text-slate-500">{group.name}</div>
          </div>
          {/* list of tasks */}
          {/* <Tasklist listOfTask={group.tasks} /> */}
        </div>
      ))}

      {/* <div className="bg-slate-100 flex justify-center flex-grow m-3 rounded">
        <button className="p-2 m-2 font-semibold text-slate-400 ">
          + Add New Column
        </button>
      </div> */}
    </div>
  );
};

export default Tasks;

// import Tasklist from "./Tasklist";

// const Tasks = ({ selectedGroups }) => {
//   return (
//     <div className="flex flex-row justify-between overflow-auto h-screen w-72">
//       {selectedGroups.map((group) => (
//         <div
//           key={group.name}
//           className="column_container outline outline-purple-700 w-[320px] flex-grow"
//         >
//           <div className="flex flex-row items-center  m-3 p-3">
//             <div className="h-3 w-3 rounded-full bg-red-400"></div>
//             <div className="p-3 text-slate-500">{group.name}</div>
//           </div>
//           {/* list of tasks */}
//           <Tasklist listOfTask={group.tasks} />
//         </div>
//       ))}

//       <div className="bg-slate-100 flex justify-center flex-grow m-3 rounded">
//         <button className="p-2 m-2 font-semibold text-slate-400 ">
//           + Add New Column
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tasks;
