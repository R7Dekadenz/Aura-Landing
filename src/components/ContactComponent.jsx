import React from "react";
import "../css/contact.css";
////import EmailJs from "../hooks/Contact/EmailJs";
////import HookServices from "../hooks/Contact/HookServices";
//import Swal from "sweetalert2";
import ContactModalComponent from "./ModalsComponents/Contact/ContactModalComponent";

const ContactComponent = () => {
  return (
    <>
      <section id="contact" className="bg-blue">
        <div className="container bg-blue text-white px-5 py-5 text-center">
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-bold pb-16 h1-txt-1 ">
                {" "}
                "Las ideas nacen de un destello de inspiración y se fortalecen
                con la determinación de hacerlas realidad. Cada proyecto
                comienza con un sueño, pero es el primer paso, el contacto, lo
                que convierte esas ideas en acciones concretas. Este es el
                momento perfecto para dar vida a tus aspiraciones. Estamos aquí
                para escuchar, colaborar y construir contigo un camino hacia el
                éxito."
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <cite className="font-bold h3-txt-1 text-aqua">
                {" "}
                Queremos escuchar tus ideas...{" "}
              </cite>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-md-12">
              <div className="text-center justify-content-center">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  className="btn-contact"
                >
                  {" "}
                  <p className="mb-0"> Contactanos </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
      </section>
      <ContactModalComponent />
    </>
  );
};

export default ContactComponent;
