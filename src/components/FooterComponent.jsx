import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-white">
      <section className="d-flex justify-content-center justify-content-lg-between px-3 py-3 border-bottom">
        <div className="me-5 pt-1 d-none d-lg-block">
          <span>Contáctanos en nuestras redes sociales:</span>
        </div>
        <ButtonGroup>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaFacebookF />
          </Button>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaTwitter />
          </Button>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaGoogle />
          </Button>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaInstagram />
          </Button>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaLinkedin />
          </Button>
          <Button variant="link" href="#" className="text-reset me-3">
            <FaGithub />
          </Button>
        </ButtonGroup>
      </section>

      <Container className="text-center text-md-start">
        <Row className="g-4 mt-4">
          {" "}
          {/* Se añadió espaciado horizontal y vertical */}
          <Col md={3} lg={4} xl={3} className="mb-4 me-5">
            <h3 className="text-uppercase fw-bold mb-4">
              Aura Development Solutions
            </h3>
            <p>
              Empresa dedicada al desarrollo de software, marketing y diseño web
              a la medida.
            </p>
          </Col>
          <Col md={2} lg={2} xl={2} className="mb-4 me-3">
            <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
            <p>
              <a
                href="#web_development"
                className="text-reset text-decoration-none"
              >
                Desarrollo Web
              </a>
            </p>
            <p>
              <a href="#web_design" className="text-reset text-decoration-none">
                Diseño Web
              </a>
            </p>
            <p>
              <a href="#services" className="text-reset text-decoration-none">
                Aura Modules
              </a>
            </p>
            <p>
              <a
                href="#graphic_design"
                className="text-reset text-decoration-none"
              >
                Diseño Gráfico
              </a>
            </p>
          </Col>
          <Col md={3} lg={2} xl={2} className="mb-4 me-3">
            <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>
            <p>
              <a href="#index" className="text-reset text-decoration-none">
                Inicio
              </a>
            </p>
            <p>
              <a href="#about" className="text-reset text-decoration-none">
                Nosotros
              </a>
            </p>
            <p>
              <a href="#contact" className="text-reset text-decoration-none">
                Contacto
              </a>
            </p>
            <p>
              <a href="#services" className="text-reset text-decoration-none">
                Productos
              </a>
            </p>
          </Col>
          <Col md={4} lg={3} xl={3} className="mb-4 me-3">
            <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
            <p>
              <FaFacebookF className="me-2" />
              Aura Development Solutions
            </p>
            <p>
              <FaGoogle className="me-2" />
              aura.develop@gmail.com
            </p>
            <p>
              <FaFacebookF className="me-2" />
              +52 833 128 7096
            </p>
            <p>
              <FaGithub className="me-2" />
              AuraDevSolutions
            </p>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center py-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:{" "}
        <a className="text-reset fw-bold text-decoration-none" href="#index">
          Aura Development Solutions
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
