import React from "react";
import EmailJs from "../../../hooks/Contact/EmailJs";
import HookServices from "../../../hooks/Contact/HookServices";
import Swal from "sweetalert2";

const ContactModalComponent = () => {
  // hook para obtener el estado del formulario y las funciones necesarias
  const { formData, isLoading, handleChange, handleSubmit, resetForm } =
    EmailJs();

  // hook para obtener las opciones de servicio
  const services = HookServices();

  const handleFormSubmit = (e) => {
    handleSubmit(e)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje Enviado!",
          text: "¡Gracias por contactarnos! Te responderemos pronto.",
          confirmButtonText: "Aceptar",
        }).then(() => {
          const modalElement = document.getElementById("contactModal");
          const modalInstance = new window.bootstrap.Modal(modalElement);
          modalInstance.hide(); // Cierra el modal
          resetForm();
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
          confirmButtonText: "Aceptar",
        });
      });
  };

  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">
              Contáctanos
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label">
                  Empresa:
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="service" className="form-label">
                  Servicio:
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.length > 0 ? (
                    services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Cargando servicios...
                    </option>
                  )}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensaje:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModalComponent;
