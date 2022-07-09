import { render } from "@testing-library/react";
import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import TableHeader from "./common/tableHeader";
import TableBody from "./tableBody";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => {
        return <Link to={movie._id}>{movie.title}</Link>;
      },
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
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
      content: (movie) => {
        if (this.props.user.isAdmin)
          return (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                this.props.onlDelete(movie);
              }}
            >
              Delete
            </button>
          );
      },
    },
  ];
  render() {
    return (
      <Table
        columns={this.columns}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
        data={this.props.movies}
      />
    );
  }
}

export default MovieTable;
