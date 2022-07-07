import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenre, getGenres } from "../services/genreService";
import MovieTable from "./movieTable";
import _ from "lodash";
import { NavLink, Outlet } from "react-router-dom";
import SearchBox from "./common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
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
    searchQuery: "",
  };

  async componentDidMount() {
    const {data} = await getGenres()
    console.log(data);
    const genres = [{ _id: "", path: "", name: "All Genres" }, ...data];
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
  };

  handdelPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handelGenreSelect = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handelSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handelSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: "", currentPage: 1 });
  };

  getPageData = () => {
    let filterdMovies = this.state.movies;
    if (this.state.searchQuery) {
      filterdMovies = filterdMovies.filter((movie) =>
        movie.title
          .toLowerCase()
          .startsWith(this.state.searchQuery.toLowerCase())
      );
    } else {
      filterdMovies =
        this.state.currentGenre && this.state.currentGenre._id
          ? this.state.movies.filter(
              (movie) => movie.genre._id === this.state.currentGenre._id
            )
          : this.state.movies;
    }

    const sorted = _.orderBy(
      filterdMovies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return { totalCount: filterdMovies.length, data: movies };
  };

  render() {
    const { totalCount, data } = this.getPageData();
    if (this.state.currentGenre && totalCount <= 0)
      return <p>There is no movies! </p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.currentGenre}
            onItemSelect={this.handelGenreSelect}
          />
        </div>
        <div className="col">
          <NavLink to="/movies/new" className="btn btn-primary mb-1">
            New Movie
          </NavLink>

          <SearchBox
            value={this.state.searchQuery}
            onChange={this.handelSearch}
          />

          <p>Showing availabel {totalCount} movies </p>
          <MovieTable
            movies={data}
            onlLikeClick={this.handelLikeClick}
            onlDelete={this.handelDelete}
            onSort={this.handelSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            onPageChange={this.handdelPageChange}
            currentPage={this.state.currentPage}
          />
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Movies;
