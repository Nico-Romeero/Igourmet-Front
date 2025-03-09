import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OrderModal({ isProcessing, isConfirmed }) {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate("/comprar");
  };
  const handleMyOrders = () => {
    setShowModal(false);
    navigate("/usuario/ordenes");
  };

  return (
    <>
      {isProcessing && (
        <Modal show centered>
          <Modal.Header>
            <Modal.Title>Procesando tu pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Por favor, espera un momento mientras procesamos tu pedido...</p>
            <iframe
              className="animation-center"
              src="https://lottie.host/embed/720b18e4-1716-43fd-87f5-995b7e7f59f9/DKMHurMy26.json"
            ></iframe>
          </Modal.Body>
        </Modal>
      )}

      {isConfirmed && (
        <Modal show centered>
          <Modal.Header className="d-flex justify-content-between">
            <Modal.Title>¡Orden confirmada!</Modal.Title>
            <i
              onClick={handleClose}
              className="bi bi-x"
              style={{ cursor: "pointer" }}
            ></i>
          </Modal.Header>
          <Modal.Body className="w-100">
            <p>
              Tu pedido ha sido procesado exitosamente. Gracias por tu compra.
            </p>
            <iframe
              className="animation-center"
              src="https://lottie.host/embed/6ba22027-1096-40e3-8162-bb21041e5c1b/6swtpO9MRB.json"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="rounded not-action-color">
              Cerrar
            </button>
            <button onClick={handleMyOrders} className="rounded">
              Ver mis órdenes
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default OrderModal;
