import { render } from "@testing-library/react";
import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./tableBody";

class MovieTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onlLikeClick(movie)}
        />
      ),
    },
    {
      key: "deleteButton",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onlDelete(movie);
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />
        <TableBody
          data={this.props.movies}
          onlLikeClick={this.props.onlLikeClick}
          onDelete={this.props.onlDelete}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default MovieTable;
