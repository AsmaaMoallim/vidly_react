import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import Like from "../components/common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenre, getGenres } from "../services/genreService";

class Movies extends Component {
  state = {
    movies: [],
    // genres: getGenres(),
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: {
      _id: "1",
      name: "Action",
    },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handelDelete = (movie) => {
    const movies = deleteMovie(movie._id);
    this.setState({
      movies,
    });
  };
  handelLikeClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    // const liked = !movie.liked;
    // console.log(movie);
  };

  handdelPageChange = (page) => {
    this.setState({ currentPage: page });
    console.log("page changed", page);
  };

  handelGenreSelect = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
    console.log("test", genre.name);
  };

  render() {
    const filterdMovies =
      this.state.currentGenre && this.state.currentGenre._id
        ? this.state.movies.filter(
            (movie) => movie.genre._id == this.state.currentGenre._id
          )
        : this.state.movies;
    // const filterdMovies = this.state.movies.filter(
    //   (movie) => movie.genre.name == this.state.currentGenre
    // );
    const { length } = filterdMovies;

    if (length <= 0) {
      return <p>There is no movies! </p>;
    }

    const movies = paginate(
      filterdMovies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.currentGenre}
            // textProperty="name"
            // valuePropert="_id"
            onItemSelect={this.handelGenreSelect}
          />
        </div>
        <div className="col">
          {/* {length <= 0 && <p>There is no movies! </p>}{" "} */}
          <p>Showing available {length} movies </p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handelLikeClick(movie)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.handelDelete(movie);
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            itemsCount={length}
            pageSize={this.state.pageSize}
            onPageChange={this.handdelPageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
