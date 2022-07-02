import React, { Component } from "react";

import _ from "lodash";

class TableBody extends Component {
  state = {};
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.dbName);
  };

  createKey = (item, column) => item._id + (column.dbName || column.key);

  render() {
    return (
      <tbody>
        {this.props.data.map((item) => (
          <tr key={item._id}>
            {this.props.columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
