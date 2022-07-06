import React from "react";

const Input = ({ id, lable, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {lable}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={id}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
