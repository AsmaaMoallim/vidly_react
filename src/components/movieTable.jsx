import { render } from "@testing-library/react";
import React, { Component } from "react";
import Like from "./common/like";

class MovieTable extends Component {
    state = {  } 
    // { movies, onlLikeClick, onlDelete, onSort } = this.props;

    render() { 
        return (
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => this.props.onSort("title")}>Title</th>
                <th onClick={() => this.props.onSort("genre.name")}>Genre</th>
                <th onClick={() => this.props.onSort("numberInStock")}>Stock</th>
                <th onClick={() => this.props.onSort("dailyRentalRate")}>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.props.onlLikeClick(movie)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.props.onlDelete(movie);
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
        );
    }
}

export default MovieTable;
