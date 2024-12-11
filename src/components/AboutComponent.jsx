import React from "react";
import "../css/about.css";
import "../css/style.css";
import companyVisionImage from "../media/img/company_vision.jpg";

const AboutComponent = () => {
  return (
    <section id="about" className="section-about">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
            <img
              className="img-about"
              src={companyVisionImage}
              alt="Company Vision"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-about"
              src={companyVisionImage}
              alt="Company Vision"
            />
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
