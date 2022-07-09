import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
  const navigate = useNavigate();
  return <LoginFormC navigate={navigate} setToken={setToken} />;
};

class LoginFormC extends Form {
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
    await Login(this.state.data)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data);
        this.props.setToken(res.data);
        console.log("logged in");
        return this.props.navigate("/movies");
      })
      .catch((ex) => {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state.errors };
          errors.username = ex.response.data;
          this.setState({ errors });
          console.log(ex.response.data);
        }
      });
    // try {
    //   const { data: jwt } = await Login(this.state.data);
    // } catch (ex) {
    // }
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
