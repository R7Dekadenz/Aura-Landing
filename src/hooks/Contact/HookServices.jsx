import { useState, useEffect } from "react";

// Hook para manejar los servicios
const HookServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setServices([
        { id: "1", name: "Desarrollo web" },
        { id: "2", name: "Diseño y publicidad" },
        { id: "3", name: "Aura Software" },
        { id: "4", name: "Desarrollos especiales" },
      ]);
    }, 1000);
  }, []);

  return services;
};

export default HookServices;
