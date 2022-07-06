import React, { useRef } from "react";

const LoginForm = () => {
  const usernameinput = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    usernameinput.current.focus();
    console.log(usernameinput);
  };

  return (
    <div className="form_page">
      <h1>Login</h1>

      <form onSubmit={handelSubmit} action="" className="mt-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            ref={usernameinput}
            id="username"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mb-1">
            Password
          </label>
          <input id="password" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
