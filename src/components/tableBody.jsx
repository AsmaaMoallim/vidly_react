import React, { Component } from "react";

import _ from "lodash";

class TableBody extends Component {
  state = {};
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.dbName);
  };
  render() {
    return this.props.data.map((item) => (
      <tr key={item._id || item.key}>
        {this.props.columns.map((column) => (
          <td>{this.renderCell(item, column)}</td>
        ))}
      </tr>
    ));
    // <tr key={item._id}>
    //   <td>{item.title}</td>
    //   <td>{item.genre.name}</td>
    //   <td>{item.numberInStock}</td>
    //   <td>{item.dailyRentalRate}</td>
    //   <td>
    //     <Like
    //       liked={item.liked}
    //       onClick={() => this.props.onlLikeClick(item)}
    //     />
    //   </td>
    //   <td>
    //     <button
    //       className="btn btn-danger btn-sm"
    //       onClick={() => {
    //         this.props.onlDelete(item);
    //       }}
    //     >
    //       {" "}
    //       Delete{" "}
    //     </button>
    //   </td>
    // </tr>
    // });
  }
}

export default TableBody;
