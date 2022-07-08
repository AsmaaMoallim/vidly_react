import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/usersService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  usernameSchema = Joi.string().email().required().label("Username");
  passwordSchema = Joi.string().min(5).max(20).required().label("Password");
  nameSchema = Joi.string().min(4).max(20).required().label("Name");

  schema = Joi.object({
    username: this.usernameSchema,
    password: this.passwordSchema,
    name: this.nameSchema,
  });

  doSubmit = async () => {
    // Call the server
    await register(this.state.data);
    console.log("registered in");
  };

  render() {
    return (
      <div className="form_page">
        <h1>Register</h1>
        <form onSubmit={this.handelSubmit} action="" className="mt-4">
          {this.renderInput("username", "Username", "text", {
            autoFocus: true,
          })}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
