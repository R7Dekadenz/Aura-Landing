import { useState } from "react";
import emailjs from "emailjs-com";
///import axios from "axios";

// Hook para manejar el envío del formulario de contacto
const EmailJs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    phone: "",
    email: "",
    message: "",
    from: "", // Correo del remitente
    to: "", // Correo del destinatario
    subject: "",
    text: "",
    html: "",
    Status: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      service: "",
      phone: "",
      email: "",
      message: "",
      from: "",
      to: "",
      subject: "",
      text: "",
      html: "",
      Status: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to: "yumei.develop@gmail.com",
      name: formData.name,
      service: formData.service,
      company: formData.company,
      phone: formData.phone,
      from: formData.email,
      message: formData.message,
    };

    await emailjs.send(
      "service_wz96v7g",
      "template_zwncaet",
      templateParams,
      "BmBFYLlS9Gk3fAfKm"
    );

    /*const sendMailToDB = async () => {
      await axios.post("http://localhost:3001/api/send-email", {
        from: formData.email,
        to: "yumei.develop@gmail.com",
        subject: `Cotización para ${formData.service} por parte de ${formData.company}`,
        text: `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nServicio: ${formData.service}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`,
        html: `
          <p><strong>Nombre:</strong> ${formData.name}</p>
          <p><strong>Empresa:</strong> ${formData.company}</p>
          <p><strong>Servicio:</strong> ${formData.service}</p>
          <p><strong>Teléfono:</strong> ${formData.phone}</p>
          <p><strong>Mensaje:</strong> ${formData.message}</p>
        `,
        Status: (formData.Status = response.status === 200 ? 200 : 500),
        name: formData.name,
        company: formData.company,
        service: formData.service,
        phone: formData.phone,
        message: formData.message,
      });
    };*/

    try {
      // sendMailToDB();
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      //sendMailToDB();
    } finally {
      //setIsLoading(false);
      resetForm();
    }
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default EmailJs;
