import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

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
  };

  validateProperty = ({ id, value }) => {
    const obj = { [id]: value };
    const schema = Joi.object({ [id]: this[`${id}Schema`] });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

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

  renderInput(id, label, autoFocus = false, type = "text") {
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
  renderSelect(name, label, options ) {
        
    const { data, errors} = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handelChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
