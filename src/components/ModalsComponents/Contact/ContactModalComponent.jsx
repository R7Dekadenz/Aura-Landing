import React from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import EmailJs from "../../../hooks/Contact/EmailJs";
import HookServices from "../../../hooks/Contact/HookServices";
import Swal from "sweetalert2";

const ContactModalComponent = ({ show, handleClose }) => {
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
          handleClose(); // Cierra el modal
          resetForm(); // Limpia el formulario
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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contáctanos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCompany">
            <Form.Label>Empresa:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu empresa"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formService">
            <Form.Label>Servicio:</Form.Label>
            <Form.Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo Electrónico:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Ingresa tu mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={isLoading}
          >
            {isLoading ? <Spinner animation="border" size="sm" /> : "Enviar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModalComponent;
