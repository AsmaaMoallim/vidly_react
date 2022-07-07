import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {/* {console.log(options)} */}

        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-dan ger">{error}</div>}
    </div>

    // <input
    //   type="select"
    //   name={name}
    //   value={value}
    //   label={label}
    //   options={options}
    //   onChange={onChange}
    //   error={error}
    // />
  );
};

export default Select;
