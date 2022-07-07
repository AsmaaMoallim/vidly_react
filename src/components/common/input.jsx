import React from "react";

const Input = ({ id, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} {...rest} className="form-control" />
      {error && <div className="alert alert-danger mb-2">{error}</div>}
    </div>
  );
};

export default Input;
