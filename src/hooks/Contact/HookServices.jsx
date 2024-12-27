import { useState, useEffect } from "react";

// Hook para manejar los servicios
const HookServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setServices([
        { id: "1", name: "Desarrollo de Aplicaciones Web" },
        { id: "2", name: "Diseño Web" },
        { id: "3", name: "Aura Modules" },
        { id: "4", name: "Diseño Gráfico" },
      ]);
    }, 1000);
  }, []);

  return services;
};

export default HookServices;
