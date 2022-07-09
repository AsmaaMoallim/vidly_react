import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Logout = ({ token, setToken }) => {
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    localStorage.removeItem("token");
    // return <Navigate to="/" />;
    // navigate("/movies");
    window.location = "/movies";

  }, [location]);

  return null;
};

export default Logout;
