import React, { Component } from "react";

import _ from "lodash";
import { Link } from "react-router-dom";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    // const cellValue = _.get(item, column.path);
    // if (column.path === "title")
    //   return <Link to={`${item._id}`}>{cellValue}</Link>;
    // return cellValue;
    return _.get(item, column.path);
  };

  createKey = (item, column) => item._id + (column.path || column.key);

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
