import Navbar from "./Components/Navbav/Navbar";
import Sidebar from "./Components/Navbav/Sidebar";
import Results from "./Components/Results /Results";
import Home from "./Pages/Home";
import LoginRegister from "./Pages/LoginRegister";
import UserProvider from "./context/user";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="bg-[#f4f9ff] ">
          <Navbar />
          <div className="flex flex-row ">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/results" element={<Results />} />
              <Route exact path="/login" element={<LoginRegister />} />
            </Routes>
          </div>
        </div>
      </UserProvider>{" "}
    </BrowserRouter>
  );
}

export default App;
