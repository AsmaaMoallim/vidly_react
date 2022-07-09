import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/movies">
          Vidly
        </NavLink>
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
            {!user && (
              <React.Fragment>
                <li>
                  <NavLink to={"/login"} className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/register"} className="nav-link">
                    Register
                  </NavLink>
                </li>{" "}
              </React.Fragment>
            )}

            {user && (
              <React.Fragment>
                <li>
                  <NavLink to={"/profile"} className="nav-link">
                    {user.name}
                  </NavLink>
                </li>
                <li >
                  <NavLink to={"/logout"} className="nav-link">
                    Logout
                  </NavLink>
                </li>{" "}
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
