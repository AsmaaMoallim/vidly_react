import React, { Component } from "react";
import TableBody from "../tableBody";
import TableHeader from "./tableHeader";

class Table extends Component {
  state = {};
  render() {
    const { data, columns, sortColumn, onSort, onlLikeClick, onlDelete } =
      this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={data}
          onlLikeClick={onlLikeClick}
          onDelete={onlDelete}
          columns={columns}
        />
      </table>
    );
  }
}

export default Table;
