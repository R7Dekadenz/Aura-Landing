import React from "react";
import "../css/products.css";
import { Container, Row, Col, Image, Card, Carousel } from "react-bootstrap";
import webDesign from "../media/img/web-design.jpg";
import graphicDesign from "../media/img/graphic-design.jpg";
import webDevelopment from "../media/img/web-development.jpg";

const ProductsComponent = () => {
  return (
    <section className="mb-5" id="services">
      <Container>
        <hr />
      </Container>

      <Carousel indicators={false} className="pb-5">
        <Carousel.Item>
          <Container className="pt-5">
            <Row>
              <Col xl={6} className="">
                <Image src={webDesign} className="" thumbnail />
              </Col>

              <Col xl={6}>
                <Container className="text-justify" id="web_design">
                  <h1 className="pb-3">Diseño Web Personalizado </h1>
                  <Row>
                    <Col xl={12} className="pt-2">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Diseño Web Personalizado</strong>
                          </Card.Title>
                          <Card.Text>
                            Creamos páginas que destacan la esencia de tu
                            negocio, enfocadas en captar la atención de tus
                            clientes.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>
                              Profesionalismo en Cada Línea de Código
                            </strong>
                          </Card.Title>
                          <Card.Text>
                            Fusionamos funcionalidad y estética para ofrecer
                            soluciones web que elevan la imagen de tu marca.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Elegancia Simple y Moderna</strong>
                          </Card.Title>
                          <Card.Text>
                            Diseños limpios y minimalistas que aseguran una
                            exper iencia de usuario fluida y atractiva.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Tu Marca en Cada Detalle</strong>
                          </Card.Title>
                          <Card.Text>
                            Nos aseguramos de que tu identidad visual esté
                            reflejada en un diseño web único y profesional.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="pt-5">
            <Row>
              <Col xl={6} className="">
                <Image src={graphicDesign} className="" thumbnail />
              </Col>

              <Col xl={6}>
                <Container className="text-justify" id="graphic_design">
                  <h1 className="pb-3">Diseño Gráfico</h1>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Diseño Gráfico Innovador</strong>
                          </Card.Title>
                          <Card.Text>
                            Creamos soluciones gráficas únicas que comunican
                            eficazmente la esencia de tu marca y cautivan a tu
                            audiencia.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Identidad Visual de Impacto</strong>
                          </Card.Title>
                          <Card.Text>
                            Diseñamos logotipos y materiales gráficos que
                            reflejan la personalidad de tu marca y generan
                            conexión con tu público.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Material Publicitario Creativo</strong>
                          </Card.Title>
                          <Card.Text>
                            Diseñamos flyers, banners, y publicaciones
                            visualmente atractivas para campañas de marketing
                            exitosas.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Experiencia en Diseño Editorial</strong>
                          </Card.Title>
                          <Card.Text>
                            Creamos diseños para revistas, catálogos y libros,
                            cuidando cada detalle para ofrecer un producto final
                            profesional y estético.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="pt-5">
            <Row>
              <Col xl={6} className="">
                <Image src={webDevelopment} className="" thumbnail />
              </Col>

              <Col xl={6}>
                <Container className="text-justify" id="web_development">
                  <h1 className="pb-3">Desarrollo de Aplicaciones Web</h1>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Soluciones Web Eficientes</strong>
                          </Card.Title>
                          <Card.Text>
                            Construimos aplicaciones web rápidas, seguras y
                            escalables diseñadas para satisfacer las necesidades
                            únicas de tu negocio.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Tecnología Moderna</strong>
                          </Card.Title>
                          <Card.Text>
                            Utilizamos las herramientas y frameworks más
                            recientes para garantizar un rendimiento óptimo.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Interfaces Amigables</strong>
                          </Card.Title>
                          <Card.Text>
                            Creamos interfaces intuitivas que permiten a los
                            usuarios navegar con facilidad.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="pt-3">
                      <Card style={{ width: "100%" }}>
                        <Card.Body>
                          <Card.Title>
                            <strong>Optimización SEO</strong>
                          </Card.Title>
                          <Card.Text>
                            Diseñamos páginas web optimizadas para los motores
                            de búsqueda.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ProductsComponent;
