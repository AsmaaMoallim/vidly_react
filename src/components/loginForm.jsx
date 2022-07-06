import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  usernameSchema = Joi.string()
    .alphanum()
    .min(4)
    .max(20)
    .required()
    .label("Username");
  passwordSchema = Joi.string().min(4).max(20).required().label("Password");

  schema = Joi.object({
    username: this.usernameSchema,
    password: this.usernameSchema,
  });

  doSubmit = () => {
    // Call the server
    console.log("logged in");
  };

  render() {
    return (
      <div className="form_page">
        <h1>Login</h1>
        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          {this.renderInput("username", "Username", { autoFocus: true })}
          {this.renderInput("password", "Password", { type: "password" })}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
