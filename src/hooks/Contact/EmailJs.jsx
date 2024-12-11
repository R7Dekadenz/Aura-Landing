import { useState } from "react";
import emailjs from "emailjs-com";

// Hook para manejar el envío del formulario de contacto
const EmailJs = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      service: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const [isLoading, setIsLoading] = useState(false); // para la activacion del botón

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    return emailjs
      .sendForm(
        "service_wz96v7g",
        "template_zwncaet",
        e.target,
        "BmBFYLlS9Gk3fAfKm"
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          return "success";
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
          throw error;
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

/*
import { useState } from "react";
import emailjs from "emailjs-com";

// Hook para manejar el envío del formulario de contacto
const EmailJs = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // para la activación del botón

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Usando send() en lugar de sendForm para enviar los datos manualmente
    const templateParams = {
      to_email: "destinatario@correo.com", // Puedes poner un valor dinámico aquí
      from_name: formData.name,
      from_service: formData.service,
      from_company: formData.company,
      from_phone: formData.phone,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_wz96v7g", // ID del servicio configurado en EmailJS
        "template_zwncaet", // ID de la plantilla configurada en EmailJS
        templateParams, // Aquí pasamos los datos del formulario
        "BmBFYLlS9Gk3fAfKm" // Tu User ID de EmailJS
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          return "success"; // Podrías manejar esto como una alerta o mensaje al usuario
        },
        (error) => {
          console.log("Error al enviar el correo:", error.text);
          throw error;
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default EmailJs;


*/

export default EmailJs;
