import React from "react";

const Like = () => {
  return (
    <i
      onClick={this.props.onClick}
      className={
        this.props.liked ? "bi bi-balloon-heart" : "bi bi-balloon-heart-fill"
      }
    ></i>
  );
};

export default Like;
