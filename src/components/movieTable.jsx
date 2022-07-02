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
    { dbName: "like", lable: "" },
    { dbName: "deleteButton", lable: "" },
  ];
  //   emptyThCount = ["like", "deleteButton"];
  render() {
    // const { sortColumn } = this.props;

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
            items={this.props.movies}
            onlLikeClick={this.props.onlLikeClick}
            onDelete={this.props.onlDelete}
          />
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
