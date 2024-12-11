// src/components/LoginModalComponent.jsx
import React from "react";
import "../../../css/login.css"; // Importamos los estilos personalizados

const LoginModalComponent = () => {
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content custom-modal-content">
          <div className="modal-header custom-modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Iniciar Sesión
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <form className="custom-modal-form">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="Correo electrónico"
                required
              />
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Contraseña"
                required
              />
              <button type="submit" className="btn custom-button">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModalComponent;
