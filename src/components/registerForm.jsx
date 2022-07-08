import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/usersService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  return <RegisterFormC navigate={navigate} />;
};

class RegisterFormC extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  usernameSchema = Joi.string().email().required().label("Username");
  passwordSchema = Joi.string().min(8).max(20).required().label("Password");
  nameSchema = Joi.string().min(4).max(20).required().label("Name");

  schema = Joi.object({
    username: this.usernameSchema,
    password: this.passwordSchema,
    name: this.nameSchema,
  });

  doSubmit = async () => {
    // Call the server

    try {
      await register(this.state.data).then((data) => {
        localStorage.setItem("token", data.headers["x-auth-token"]);
        console.log("registerd ");
        return this.props.navigate("/movies");
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    //   .then((data) => {
    //     // return console.log(data.headers["x-auth-token"]);
    //   })
    //   .catch((ex) => {
    //       // toast.error(ex.response.data);
    //       // console.log(ex.response);
    //     }
    //   });
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
