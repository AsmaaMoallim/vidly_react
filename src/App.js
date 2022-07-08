import "./App.css";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <main className="container">
        <NavBar />
        {/* <Movies /> */}

        <AppRoutes />
      </main>
    </React.Fragment>
  );
}

export default App;
//
