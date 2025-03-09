function BannerCheese() {
  return (
    <div className="container-fluid discount-bg-color d-flex flex-column align-items-center justify-content-center section-height pt-3">
      <div className="container text-center pb-3" data-aos="fade-left">
        <h2 className="mb-4 display-4 fw-bold">¿Por qué elegir igourmet?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src="/Section_Icon1.png"
              className="img-fluid"
              alt="Imagen 1"
            />
            <h5 className="fw-bold">Selección increíble</h5>
            <p className="mt-2">
              Somos una tienda única para todo lo gourmet. Con más de 550
              quesos, carnes y regalos. ¡Lo tenemos todo!
            </p>
          </div>
          <div className="col-md-4 mb-4 px-4">
            <img
              src="/Section_Icon2.png"
              className="img-fluid"
              alt="Imagen 2"
            />
            <h5 className="fw-bold">Expertos en envíos</h5>
            <p className="mt-2">
              Más de 25 años de experiencia enviando productos inigualables y
              utilizando embalajes de primera calidad.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="/Section_Icon3.png"
              className="img-fluid"
              alt="Imagen 3"
            />
            <h5 className="fw-bold">Entrega a nivel nacional</h5>
            <p className="mt-2">
              Realizamos envíos rápidos y seguros a todo el país. Opción de
              entrega al día siguiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCheese;
