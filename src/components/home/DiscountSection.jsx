import { Link } from "react-router-dom";
import "../../App.css";
import { toast } from "react-toastify";

function DiscountSection() {
  const handleToastify = () => {
    toast.warning("Sección en desarrollo", {
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
    <div className="container-fluid curva-light discount-bg-color">
      <div className="container pb-5" data-aos="fade-right">
        <div className="row flex-column-reverse flex-md-row align-items-center text-center text-md-start">
          <div className="col d-flex flex-column align-items-center align-items-md-start">
            <div>
              <h2 className="fw-bold display-4">Tu tabla a tu medida</h2>
              <h5 className="mb-4">
                Elegí, combiná y sorprendé. Creá tu propia tabla con una
                selección de quesos, fiambres y otras delicias artesanales.
                Aprovechá para disfrutar de una experiencia gastronómica única,
                perfecta para compartir en cualquier ocasión especial o
                simplemente darte un gusto. ¡Descubrí nuevos sabores y lleváte
                lo mejor a tu mesa!
              </h5>
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="mb-3 rounded px-2" onClick={handleToastify}>
                  Armá tu tabla
                </button>
              </div>
            </div>
          </div>

          <div className="col d-flex align-items-center justify-content-center justify-content-md-end">
            <img
              src="https://murrayscheese.imgix.net/yw4bax9wf07j1au8vaydjpj82j27?ixlib=rails-4.3.1&auto=format&fit=max&w=1000&q=80"
              className="img-fluid rounded"
              alt="Tabla de quesos"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
