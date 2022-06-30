import "./App.css";
import { getMovies } from "./services/movieService";
import { getGenre } from "./services/genreService";
import Movie from "./movies";
import Movies from "./components/movie";

function App() {
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
//
