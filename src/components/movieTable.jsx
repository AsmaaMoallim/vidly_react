import { render } from "@testing-library/react";
import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./tableBody";

class MovieTable extends Component {
  columns = [
    { dbName: "title", lable: "Title" },
    { dbName: "genre.name", lable: "Genre" },
    { dbName: "numberInStock", lable: "Stock" },
    { dbName: "dailyRentalRate", lable: "Rate" },
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
        <thead>
          <TableHeader
            columns={this.columns}
            // emptyThCount={this.emptyThCount}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
          />
        </thead>
        <tbody>
          <TableBody
            data={this.props.movies}
            onlLikeClick={this.props.onlLikeClick}
            onDelete={this.props.onlDelete}
            columns={this.columns}
          />
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
