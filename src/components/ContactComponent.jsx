import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactModalComponent from "./ModalsComponents/Contact/ContactModalComponent";
import "../css/contact.css";

const ContactComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section id="contact" className="bg-blue">
        <Container className="bg-blue text-white px-5 py-5 text-center">
          <Row>
            <Col md={12}>
              <h1 className="font-bold pb-16 h1-txt-1">
                "Las ideas nacen de un destello de inspiración y se fortalecen
                con la determinación de hacerlas realidad. Cada proyecto
                comienza con un sueño, pero es el primer paso, el contacto, lo
                que convierte esas ideas en acciones concretas. Este es el
                momento perfecto para dar vida a tus aspiraciones. Estamos aquí
                para escuchar, colaborar y construir contigo un camino hacia el
                éxito."
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <cite className="font-bold h3-txt-1 text-aqua">
                Queremos escuchar tus ideas...
              </cite>
            </Col>
          </Row>
          <Row className="pt-5 text-center">
            <Col md={12}>
              <button className="btn-contact" onClick={handleShow}>
                <span className="mb-0">Contáctanos</span>
              </button>
            </Col>
          </Row>
        </Container>
        <Container>
          <hr />
        </Container>
      </section>

      {/* Modal */}
      <ContactModalComponent show={show} handleClose={handleClose} />
    </>
  );
};

export default ContactComponent;
