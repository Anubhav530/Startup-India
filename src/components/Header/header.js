import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-primary">
      <div className="container-fluid  main-div">
        <Link className="navbar-brand title text-white" to="/">
          Startup-India
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ideas">
                Startup ideas
              </Link>
            </li>
          </ul>
          <button type="submit" className="btn btn-success">
            <Link className="text-white" to="/register">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
