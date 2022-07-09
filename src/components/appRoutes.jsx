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
import { render } from "@testing-library/react";

const AppRoutes = ({ setToken, token, user }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute token={token} />}>
        <Route path="/movies" element={<Movies user={user} token={token} />} />
      </Route>
      <Route
        path="/login"
        element={<LoginForm setToken={setToken} token={token} />}
      />
      <Route
        path="/logout"
        element={<Logout token={token} setToken={setToken} />}
      />
      <Route path="/register" element={<RegisterForm setToken={setToken} />} />
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
