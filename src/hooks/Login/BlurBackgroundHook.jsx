import { useEffect } from "react";

const BlurBackgroundHook = (modalId) => {
  useEffect(() => {
    const modal = document.getElementById(modalId);
    const body = document.body;

    const handleModalOpen = () => {
      body.classList.add("blur-background");
    };

    const handleModalClose = () => {
      body.classList.remove("blur-background");
    };

    if (modal) {
      modal.addEventListener("show.bs.modal", handleModalOpen); // Cuando se muestra el modal
      modal.addEventListener("hidden.bs.modal", handleModalClose); // Cuando se cierra el modal
    }

    // Cleanup event listeners when component unmounts
    return () => {
      if (modal) {
        modal.removeEventListener("show.bs.modal", handleModalOpen);
        modal.removeEventListener("hidden.bs.modal", handleModalClose);
      }
    };
  }, [modalId]);
};

export default BlurBackgroundHook;
