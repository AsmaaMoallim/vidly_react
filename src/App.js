import "./App.css";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        {token && <h1>{token}</h1>}
        <NavBar />
        {/* <Movies /> */}

        <AppRoutes setToken={setToken} />
      </main>
    </React.Fragment>
  );
}

export default App;
//
