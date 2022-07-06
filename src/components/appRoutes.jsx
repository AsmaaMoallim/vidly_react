import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Customers from "./customers";
import Rentals from "./renals";
import NotFound from "./notFound";
import Movies from "./movie";
import MovieForm from "./movieForm";
import LoginForm from "./loginForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/movies" element={<Movies />} />
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
