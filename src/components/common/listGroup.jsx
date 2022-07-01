import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect } = props;

  return (
    <ul className="list-group">
      <li className="list-group-item">All genres</li>
      {items.map((genre) => {
        return (
          <li
            key={genre[valueProperty]}
            onClick={() => onItemSelect(genre)}
            className="list-group-item"
          >
            {genre[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};


export default ListGroup;
