import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Login } from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  usernameSchema = Joi.string().email().required().label("Username");
  passwordSchema = Joi.string().min(8).max(20).required().label("Password");

  schema = Joi.object({
    username: this.usernameSchema,
    password: this.passwordSchema,
  });

  doSubmit = async () => {
    // Call the server
    try {
      await Login(this.state.data);
      console.log("logged in");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
        console.log(ex.response.data);
      }
    }
  };

  render() {
    return (
      <div className="form_page">
        <h1>Login</h1>
        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          {this.renderInput("username", "Username", "text", {
            autoFocus: true,
          })}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
