import React, { Component, useRef } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    data: { username: "", password: "" },
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

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.validteCustom();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    console.log("logged in");
  };

  doSubmit = () => {

  };
  
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
