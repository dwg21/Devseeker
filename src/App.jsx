import Navbar from "./Components/Navbav/Navbar";
import Sidebar from "./Components/Navbav/Sidebar";
import Results from "./Components/Results /Results";

function App() {
  return (
    <div className="bg-[#f4f9ff] ">
      <Navbar />
      <div className="flex flex-row ">
        <Sidebar />
        <Results />
      </div>
    </div>
  );
}

export default App;
