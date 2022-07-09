import { replace } from "lodash";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const useAuth = (user) => {
  if (!user) return false;
  else return true;
};

const ProtectedRoute = ({ user }) => {
  const navigate = useNavigate();
  const isAuth = useAuth(user);

  // if (!user) {
  return isAuth ? <Outlet /> : <Navigate to="/login"  replace/>;
};
export default ProtectedRoute;
