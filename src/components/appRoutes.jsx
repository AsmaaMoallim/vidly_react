import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Customers from "./customers";
import Rentals from "./renals";
import NotFound from "./notFound";
import Movies from "./movie";
import MovieForm from "./movieForm";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import Logout from "./logOut";
import ProtectedRoute from "./protectedRoute";

const AppRoutes = ({ setToken, token, user }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm setToken={setToken} />} />
      <Route
        path="/logout"
        element={<Logout token={token} setToken={setToken} />}
      />
      <Route path="/register" element={<RegisterForm setToken={setToken} />} />
      <Route
        path="/movies"
        element={
          <ProtectedRoute user={user}>
            <Movies />{" "}
          </ProtectedRoute>
        }
      />
      {/* <Route path="/movies/new" element={<MovieForm />} /> */}
      <Route path="/movies/:id" element={<MovieForm />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/notFound" />} />
      <Route path="/" element={<Navigate replace to="/movies" />} />
    </Routes>
  );
};

export default AppRoutes;
