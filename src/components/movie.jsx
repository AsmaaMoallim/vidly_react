import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenre, getGenres } from "../services/genreService";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    // genres: getGenres(),
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: {
      _id: "",
      name: "All Genres",
    },
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  componentDidMount() {
    const genres = [{ _id: "", path: "", name: "All Genres" }, ...getGenres()];
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
    // console.log("page changed", page);
  };

  handelGenreSelect = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
    // console.log("test", genre.name);
  };

  handelSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    // sortColumn.order = "desc";
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log(sortColumn);
    this.setState({ sortColumn });
  };
  render() {
    const filterdMovies =
      this.state.currentGenre && this.state.currentGenre._id
        ? this.state.movies.filter(
            (movie) => movie.genre._id === this.state.currentGenre._id
          )
        : this.state.movies;

    const sorted = _.reverse(
      _.orderBy(
        filterdMovies,
        [this.state.sortColumn.path],
        [this.state.sortColumn.order]
      )
    )
    // .sortBy(
    //   filterdMovies,
    //   [this.state.sortColumn.path],
    //   [this.state.sortColumn.order]
    // );

    const { length } = filterdMovies;

    if (length <= 0) {
      return <p>There is no movies! </p>;
    }

    const movies = paginate(
      sorted,
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
          <MovieTable
            movies={movies}
            onlLikeClick={this.handelLikeClick}
            onlDelete={this.handelDelete}
            onSort={this.handelSort}
          />
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
