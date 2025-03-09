import React from "react";
import { Link } from "react-router-dom";

function OrderDetails() {
  return (
    <>
      <div className="container mt-5 p-4">
        <Link
          to="/usuario/ordenes:id"
          className="text-decoration-none text-dark"
        >
          <h6 className="ps-3 mb-2">
            <i className="bi bi-arrow-left me-2"></i>Mis órdenes
          </h6>
        </Link>

      
      </div>
    </>
  );
}

export default OrderDetails;
