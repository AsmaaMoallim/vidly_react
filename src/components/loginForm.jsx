import React, { Component, useRef } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validte = () => {
    const account = { ...this.state.account };
    const errors = {};

    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length == 0 ? null : errors;
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const errors = this.validte();
    console.log(errors);
    this.setState({ errors: errors || {} });
    
    if (errors) return;
    console.log("logged in");
  };

  handelChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
