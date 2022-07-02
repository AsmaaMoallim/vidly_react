import { render } from "@testing-library/react";
import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MovieTable extends Component {
  state = {
    columns: ["title", "genre.name", "numberInStock", "dailyRentalRate"],
    emptyThCount: ["like", "deleteButton"],
  };
  render() {
    // const { sortColumn } = this.props;

    return (
      <table className="table">
        <thead>
          <TableHeader
            columns={this.state.columns}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
            emptyThCount={this.state.emptyThCount}
          />
        </thead>
        {/* <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead> */}
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
