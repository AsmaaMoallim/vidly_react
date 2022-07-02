import React, { Component } from "react";
import Like from "./common/like";

class TableBody extends Component {
  state = {};
  render() {
    return this.props.items.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
          <td>
            <Like
              liked={item.liked}
              onClick={() => this.props.onlLikeClick(item)}
            />
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                this.props.onlDelete(item);
              }}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default TableBody;
