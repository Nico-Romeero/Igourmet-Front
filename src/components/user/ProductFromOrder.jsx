import React from "react";

function ProductFromOrder() {
  return (
    <>
      <h2 className="mb-4 pb-2 ps-3">Número de orden: #LFT5569</h2>

      <div className="row g-4 border rounded bg-light shadow">
        <div className="col-md-8">
          <div className="border rounded p-3 mb-3">
            <div className="row align-items-center">
              <div className="col-6">
                <h6 className="fw-bold">Producto</h6>
              </div>
              <div className="col-3 text-center">
                <h6 className="fw-bold">Precio</h6>
              </div>
              <div className="col-3 text-center">
                <h6 className="fw-bold">Cantidad</h6>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-6 d-flex align-items-center">
                <img
                  src="https://murrayscheese.imgix.net/m64tag3dldlkyd0n4x1cilbshutl?ixlib=rails-4.3.1&auto=format&fit=max&w=750&q=80"
                  alt="Producto"
                  className="img-fluid rounded me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
                <p className="mb-0">Queso azul</p>
              </div>
              <div className="col-3 text-center">
                <h6 className="mb-0">$500</h6>
              </div>
              <div className="col-3 text-center">
                <h6 className="mb-0">3</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-3 bg-white shadow-sm">
            <h4 className="mb-3">Dirección de envío:</h4>
            <p className="mb-1 fw-bold">Av. Italia 1234</p>
            <p className="mb-0">Montevideo, Uruguay</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFromOrder;
