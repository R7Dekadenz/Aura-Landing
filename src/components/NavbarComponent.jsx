import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../css/navbar.css";
import { FaUser } from "react-icons/fa";

const NavbarComponent = () => {
  const handleLoginClick = () => {
    window.location.href = "http://localhost:5173/";
  };

  return (
    <Navbar expand="lg" className="navbar-light bg-white" id="index">
      <Container>
        <Navbar.Brand href="/">
          <span className="brand-name">Aura</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="navbar-nav g-txt-1">
            <Nav.Item>
              <Nav.Link href="#about">Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="a-txt-1" href="#services">
                Servicios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="a-txt-1" href="#contact">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex">
          <Button
            variant="link"
            style={{ border: "none", background: "transparent" }}
            onClick={handleLoginClick}
          >
            <FaUser size={20} color="black" />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
