import "./App.css";
import Movies from "./components/movie";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="container">
      <ToastContainer />
      <NavBar />
      {/* <Movies /> */}

      <AppRoutes />
    </main>
  );
}

export default App;
//
