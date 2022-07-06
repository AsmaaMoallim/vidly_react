import "./App.css";
import Movies from "./components/movie";
import NavBar from "./components/navbar";
import AppRoutes from "./components/appRoutes";

function App() {
  return (
    <main className="container">
      <NavBar />
      {/* <Movies /> */}
      
      <AppRoutes />
    </main>
  );
}

export default App;
//
