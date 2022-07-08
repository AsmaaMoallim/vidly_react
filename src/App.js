import "./App.css";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { setUserBasedOnToken } from "./utils/decodeToken";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) setUserBasedOnToken(token, setUser);
  }, [token]);

  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        <NavBar user={user} />
        {/* {user && <h1>{user.name}</h1>} */}
        <AppRoutes setToken={setToken} />
      </main>
    </React.Fragment>
  );
}

export default App;
//
