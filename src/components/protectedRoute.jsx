import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
};
export default ProtectedRoute;
