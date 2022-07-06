import React, { Component, useRef } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log("logged in");
  };

  handelChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div className="form_page">
        <h1>Login</h1>

        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          <Input
            autoFocus
            onChange={this.handelChange}
            value={account.username}
            id="username"
          />
          <Input
            autoFocus
            onChange={this.handelChange}
            value={account.password}
            id="password"
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
