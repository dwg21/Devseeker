import Navbar from "./Components/Navbav/Navbar";
import Sidebar from "./Components/Navbav/Sidebar";
import LoginRegister from "./Pages/LoginRegister";
import { UserContext } from "./context/user";
import { useState } from "react";
import UserProvider from "./context/user";

function App() {
  return (
    <UserProvider>
      <div className="bg-[#f4f9ff] ">
        <Navbar />
        <div className="flex flex-row ">
          <Sidebar />
          {/* <Results /> */}
          <LoginRegister />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
