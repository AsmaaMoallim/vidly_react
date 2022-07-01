import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              selectedItem[textProperty] == item[textProperty]
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
