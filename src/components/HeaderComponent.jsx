import React, { useEffect, useState } from "react";
import "../css/header.css";

function HeaderComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Activa el fade-in después de un pequeño retraso
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`header-container d-flex justify-content-center align-items-center fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="header-content text-center text-white"></div>
    </div>
  );
}

export default HeaderComponent;
