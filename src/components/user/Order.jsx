import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function Order({ order }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleToastify = () => {
    toast.warning("Elemento en desarrollo", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="container p-3 mb-3 data-card rounded">
        <div className="row align-items-center mb-2">
          <div className="col-md-9 col-12 d-flex align-items-center mb-3 mb-md-0">
            <img
              src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${
                order.items[0].image
              }`}
              alt="Imagen de un producto de la orden."
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
              }}
              className="rounded me-3"
            />
            <h5 className="fw-bold mb-0 me-3 fs-3 text-color">
              Identificador de orden:
            </h5>
            <h5 className="fw-bold mb-0 fs-3 text-color">
              {order.orderNumber}
            </h5>
          </div>
          <div className="col-md-3 col-12 text-md-end text-center">
            <Link to="">
              <button className="rounded px-4 w-100" onClick={handleToastify}>
                Comprar de nuevo
              </button>
            </Link>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-9 col-12">
            <div className="d-flex flex-wrap">
              <div className="me-4 mb-3">
                <h6 className="mb-1 fs-5 fw-bold text-color">
                  Cantidad de ítems
                </h6>
                <p className="fw-semibold mb-0 fs-5 text-color-units">
                  {order.items.length}
                </p>
              </div>
              <div className="me-4 ms-4 mb-3">
                <h6 className="mb-1 fs-5 fw-bold text-color">
                  Fecha de compra
                </h6>
                <p className="fw-semibold mb-0 fs-5 text-color-units">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="me-4 ms-4 mb-3">
                <h6 className="mb-1 fs-5 fw-bold text-color">Precio total</h6>
                <p className="fw-semibold mb-0 fs-5 text-color-units">
                  $
                  {order.items?.reduce(
                    (acc, item) => acc + item.price * item.qty,
                    0
                  ) + 200}
                </p>
              </div>
              <div className="me-4 ms-4 mb-3">
                <h6 className="mb-1 fs-5 fw-bold text-color">Estado</h6>
                <p className="fw-semibold mb-0 fs-5 text-color-units">
                  {order.status}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 text-md-end text-center mt-3 mt-md-0">
            <button
              className="not-action-color rounded w-100"
              onClick={handleShowModal}
            >
              Ver detalles de la orden
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold ms-3">
            Idetnificador de orden:{" "}
            <span className="">{order.orderNumber}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 pb-2">
          <div className="mb-2">
            <div className="d-flex justify-content-between">
              <h6 className="text-muted">Fecha de compra:</h6>
              <p className="fw-semibold mb-0">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted">Estado:</h6>
              <p className="fw-semibold mb-0">{order.status}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted">Cantidad de ítems:</h6>
              <p className="fw-semibold mb-0">{order.items.length}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="text-muted">Costo de envío:</h6>
              <p className="fw-semibold mb-0">$200</p>
            </div>
          </div>
          <div className="border-top pt-2">
            <h5 className="fw-bold mb-2">Items:</h5>
            <ul className="list-unstyled">
              {order.items?.map((item, index) => (
                <li key={index} className="d-flex align-items-center mb-3">
                  <img
                    src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${
                      item.image
                    }`}
                    alt={item.name}
                    className="rounded me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <p className="fw-semibold mb-1">
                      {item.name} x{item.qty}
                    </p>
                    <p className="text-muted small mb-0">${item.price} c/u</p>
                  </div>
                  <p className="fw-bold mb-0 text-end">
                    ${item.price * item.qty}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-top d-flex justify-content-between">
            <h5 className="fw-bold">Precio Total:</h5>
            <h5 className="fw-bold total-price">
              $
              {order.items?.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
              ) + 200}
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 p-2">
          <button onClick={handleCloseModal} className="rounded">
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Order;
