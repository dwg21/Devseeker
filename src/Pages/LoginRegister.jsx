import React, { useState, useContext } from "react";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import { UserContext } from "../context/user";

const LoginRegister = () => {
  //true -> register ppae, false -> login page
  const [showRegisterPage, setshowRegisterPage] = useState(false);
  // { user, setUser } = useContext(UserContext);

  return (
    <div className="w-full">
      {!showRegisterPage ? (
        <Login
          showRegisterPage={showRegisterPage}
          setshowRegisterPage={setshowRegisterPage}
        />
      ) : (
        <Register
          showRegisterPage={showRegisterPage}
          setshowRegisterPage={setshowRegisterPage}
        />
      )}
    </div>
  );
};

export default LoginRegister;
