import "./App.css";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import jwtdecode from "jwt-decode";
import { getUser } from "./services/usersService";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const setUserBasedOnToken = async (token) => {
    const { _id: userId } = jwtdecode(token);
    await getUser(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((ex) => {
        console.log("Error ", ex);
      });
  };

  useEffect(() => {
    if (token) setUserBasedOnToken(token);
  }, [token]);

  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        {/* {console.log("return", user)} */}
        <NavBar />
        {user && <h1>{user.data.name}</h1>}

        {/* <Movies /> */}

        <AppRoutes setToken={setToken} />
      </main>
    </React.Fragment>
  );
}

export default App;
//
