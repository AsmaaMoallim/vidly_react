import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    console.log(path);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
            return (
              <th
                key={column.dbName || column.key}
                onClick={() => this.raiseSort(column.dbName)}
                className={column.dbName}
              >
                {column.lable}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
