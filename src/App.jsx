import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="flex flex-row">
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default App;
