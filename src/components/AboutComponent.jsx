import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/about.css";
import "../css/style.css";
import companyVisionImage from "../media/img/company_vision.webp";
import companyMisionImage from "../media/img/company_mision.webp";

const AboutComponent = () => {
  return (
    <section id="about" className="section-about">
      <Container className="mb-5">
        <Row>
          <Col md={6}>
            <div className="about-text">
              <h1 className="pb-4 text-blue wx-h1-1 font-bold">VISIÓN</h1>
              <p>
                Convertirnos en una empresa globalmente reconocida por nuestra
                capacidad para impulsar la transformación digital de las
                organizaciones a través de soluciones tecnológicas innovadoras,
                escalables y sostenibles. Queremos ser un socio estratégico de
                confianza para empresas de todos los sectores, ofreciendo
                productos y servicios que no solo resuelvan sus necesidades
                actuales, sino que también anticipen los desafíos del futuro.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image
              className="img-about"
              src={companyVisionImage}
              alt="Company Vision"
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <hr />
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Image
              className="img-about"
              src={companyMisionImage}
              alt="Company Mission"
              fluid
            />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h1 className="pb-4 text-blue wx-h1-1 font-bold">MISIÓN</h1>
              <p>
                En Aura Development Solutions nos dedicamos a ofrecer soluciones
                tecnológicas personalizadas que aborden las necesidades únicas
                de nuestros clientes. A través de un enfoque ágil y
                colaborativo, entregamos resultados que optimizan la eficiencia,
                mejoran la experiencia del usuario y generan valor a largo plazo
                para cada uno de nuestros socios.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutComponent;
