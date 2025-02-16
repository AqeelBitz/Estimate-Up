import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../images/my_logo.svg';
import './navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <div>
      <nav className="myNavbar sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            className="navbar-brand text-light"
            src={logo}
            alt="EstimatUp"
            width={200}
            height={60}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light nav-item hover-underline-animation"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light nav-item hover-underline-animation"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light nav-item hover-underline-animation"
                  aria-current="page"
                  to="service"
                >
                  Services
                </Link>
              </li>
            </ul>
            {isAuthenticated ? (
              <form className="d-flex">
              <Link to="/">
                <button className="btn mysubmit" type="button" onClick={handleLogout}>
                  Logout
                </button>
                </Link>
              </form>
            ) : (
              <form className="d-flex">
                <Link to="/sign-in">
                  <button className="btn mysubmit" type="submit">
                    Login
                  </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
