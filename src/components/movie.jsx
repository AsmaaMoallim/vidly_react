import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenre, getGenres } from "../services/genreService";
import MovieTable from "./movieTable";
import _ from "lodash";
import { Navigate, NavLink, Outlet } from "react-router-dom";
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
  // componentWillMount() {
  //   if (!this.props.user) {
  //     return <Navigate to="/login" />;
  //   }
  // }

  async componentDidMount() {
    const { data: dbGenres } = await getGenres();
    // console.log(dbGenres);
    const genres = [{ _id: "", path: "", name: "All Genres" }, ...dbGenres];
    const { data: dbMovies } = await getMovies();
    // console.log(dbMovies);

    this.setState({ movies: dbMovies, genres });
  }

  handelDelete = async (movie) => {
    const orginalMovies = this.state.movies;
    console.log(orginalMovies);
    try {
      await deleteMovie(movie._id);
      const movies = orginalMovies.filter((m) => m._id !== movie._id);

      this.setState({
        movies,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("this movie has been already deleted");
      }

      if (ex.response && ex.response.status === 400) {
        console.log("you can not delete this");
      }

      this.setState({
        orginalMovies,
      });
    }
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
    // if (this.state.currentGenre && totalCount <= 0)
    //   return <p>There is no movies! </p>;
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
          {this.props.user && (
            <NavLink to="/movies/new" className="btn btn-primary mb-1">
              New Movie
            </NavLink>
          )}
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
            token={this.props.token}
            user={this.props.user}
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
