import React from "react";

const Addnewboard = () => {
  return (
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
  );
};

export default Addnewboard;
