import React, { Component } from "react";

// column: array
// sortColumn
//  onSort

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
      <tr>
        {this.props.columns.map((col) => {
          return (
            <th
              key={col.dbName}
              onClick={() => this.raiseSort(col.dbName)}
              className={col.dbName}
            >
              {col.lable}
            </th>
          );
        })}
        {/* {this.props.emptyThCount.map((head) => (
          <th key={head}></th>
        ))} */}
      </tr>
    );
  }
}

export default TableHeader;
