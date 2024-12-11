// src/components/Navbar.js
import React from "react";
import "../css/navbar.css";
import LoginModalComponent from "./ModalsComponents/Login/LoginModalComponent";
import { FaUser } from "react-icons/fa";

const NavbarComponent = () => {
  const handleLoginClick = () => {
    window.location.href = "http://localhost:5173/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-name">Aura</span>
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav g-txt-1 ">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {" "}
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-txt-1" href="#services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-txt-1" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <button
              className="btn"
              style={{ border: "none", background: "transparent" }}
              onClick={handleLoginClick}
            >
              <FaUser size={20} color="black" />
            </button>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <LoginModalComponent />
    </>
  );
};

export default NavbarComponent;
