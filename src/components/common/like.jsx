import React from "react";

const Like = ({ onClick, liked }) => {
  return (
    <i
      onClick={onClick}
      className={
        liked ? "bi bi-balloon-heart" : "bi bi-balloon-heart-fill"
      }
    ></i>
  );
};

export default Like;
