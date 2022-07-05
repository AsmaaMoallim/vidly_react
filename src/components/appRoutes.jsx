import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Customers from "./customers";
import Rentals from "./renals";
import NotFound from "./notFound";
import Movies from "./movie";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/notFound" />} />
    </Routes>
  );
};

export default AppRoutes;
