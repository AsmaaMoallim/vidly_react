import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validteCustom = () => {
    const data = { ...this.state.data };
    const errors = {};

    const options = { abortEarly: false };
    const result = this.schema.validate(data, options);

    if (!result.error) return null;

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
    // if (data.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (data.password.trim() === "") {
    //   errors.password = "Password is required";
    // }

    // return Object.keys(errors).length == 0 ? null : errors;
  };

  validateProperty = (input) => {
    if (input.id == "username") {
      if (input.value.trim() === "") return "Username is required";
    }
    if (input.id == "password") {
      if (input.value.trim() === "") return "Password is required";
    }
  };

  // validateProperty = ({ id, value }) => {
  //   const obj = { [id]: value };
  //   const key = id;
  //   const rule = this.schema[key];
  //   // const schema = Joi.object({ id: this.schema[id] });
  //   console.log(rule);
  //   // const { error } = schema.validate(obj);
  //   // return error ? error.details[0].message : null;
  // };

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.validteCustom();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handelChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.id] = errorMessage;
    } else delete errors[input.id];

    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validteCustom()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(id, label, autoFocus = false, type="text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        autoFocus={autoFocus}
        onChange={this.handelChange}
        value={data[id]}
        id={id}
        label={label}
        error={errors[id]}
      />
    );
  }
}

export default Form;