import React from "react";

const Input = ({ id, lable, value, error, onChange }) => {
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
      {error && <div className="alert alert-danger mb-2">{error}</div>}
    </div>
  );
};

export default Input;
