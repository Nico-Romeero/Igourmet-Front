import { Link } from "react-router-dom";

function FavSection() {
  return (
    <div className="container section-height d-flex flex-column align-items-center justify-content-center">
      <div
        className="row flex-column-reverse flex-md-row align-items-center text-center text-md-start"
        data-aos="fade-right"
      >
        <div className="col-md-6 d-flex align-items-center justify-content-center order-2 order-md-1">
          <img
            src="/Joy_Smaller.png"
            className="mx-auto mx-md-0 img-fluid"
            alt="Carticura que ilustra un queso señalando hacia la derecha"
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center order-1 order-md-2">
          <div className="text-center text-md-end">
            <h2 className="mb-4 fw-bold display-4">Tus favoritos</h2>
            <h5 className="mb-4">
              Descubrí y elegí entre nuestra selección de productos artesanales,
              cuidadosamente seleccionados para vos. Nos encargamos de que cada
              artículo llegue fresco y con la mejor calidad a tu mesa,
              garantizando una experiencia de sabor única. ¡Perfectos para tus
              reuniones, cenas especiales o simplemente para darte un gusto!
            </h5>
            <div className="d-flex justify-content-center justify-content-md-end">
              <Link to="/comprar">
                <button className="rounded px-2">Ver más</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavSection;
