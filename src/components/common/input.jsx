import React from "react";

const Input = ({ id, label, value, error, onChange, type }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger mb-2">{error}</div>}
    </div>
  );
};

export default Input;
