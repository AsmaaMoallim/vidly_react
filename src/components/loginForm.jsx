import React, { Component, useRef } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(4)
      .max(20)
      .required()
      .label("Username"),
    password: Joi.string().min(4).max(20).required().label("Password"),
  });

  validteCustom = () => {
    const account = { ...this.state.account };
    const errors = {};

    const options = { abortEarly: false };
    const result = this.schema.validate(account, options);

    console.log(result);
    if (!result.error) return null;

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
    // if (account.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (account.password.trim() === "") {
    //   errors.password = "Password is required";
    // }

    // return Object.keys(errors).length == 0 ? null : errors;
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.validteCustom();
    // console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("logged in");
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

  handelChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.id] = errorMessage;
    } else delete errors[input.id];

    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
  };

  render() {
    console.log(this.schema.keys());

    const { account, errors } = this.state;

    return (
      <div className="form_page">
        <h1>Login</h1>
        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          <Input
            autoFocus
            onChange={this.handelChange}
            value={account.username}
            id="username"
            lable="Username"
            error={errors.username}
          />
          <Input
            autoFocus
            onChange={this.handelChange}
            value={account.password}
            id="password"
            lable="Password"
            error={errors.password}
          />
          <button disabled={this.validteCustom()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
