import React from "react";

const LoginForm = () => {
  return (
    <div className="form_page">
      <h1>Login</h1>
      <form action="" className="mt-4">
        <div className="mb-3">
          <lable htmlFor="username" className="form-lable">
            Username
          </lable>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <lable htmlFor="password" className="form-lable mb-1">
            Password
          </lable>
          <input id="password" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
