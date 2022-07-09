import { replace } from "lodash";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

 const useAuth = (token) => {
  if (!token) {
    // console.log(token);
    return false;
  } else return true;
};

const ProtectedRoute = ({ token, path }) => {
  const navigate = useNavigate();
  const isAuth = useAuth(token);

  
  // if (!user) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
