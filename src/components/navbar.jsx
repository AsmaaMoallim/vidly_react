import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Vidly
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/customers" className="nav-link">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rentals" className="nav-link">
                Rentals
              </NavLink>
            </li>
            <li>
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
