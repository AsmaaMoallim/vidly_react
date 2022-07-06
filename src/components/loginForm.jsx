import React, { Component, useRef } from "react";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log("logged in");
  };

  handelChange = (e) => {
    const account = { ...this.state.account };
    account[e.target.id] = e.target.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="form_page">
        <h1>Login</h1>

        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              onChange={this.handelChange}
              value={this.state.account.username}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label mb-1">
              Password
            </label>
            <input
              onChange={this.handelChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
