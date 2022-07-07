import { render } from "@testing-library/react";
import React, { Component } from "react";
import Input from "./input";

const SearchBox = ({ value, onChange }) => {
  return (
    <form action="">
      {/* id, label, value, error, onChange, type */}
      <Input
        name="query"
        placeholder="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
