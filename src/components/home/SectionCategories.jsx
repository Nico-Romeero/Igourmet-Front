import { Link } from "react-router-dom";
import "../../App.css";

function SectionCategories() {
  const categories = [
    {
      id: 1,
      title: "Quesos",
      image: "/delicious-cheese-table (1).jpg",
      alt: "Quesos",
      description:
        "Variedades de quesos artesanales seleccionados para los paladares más exigentes.",
    },
    {
      id: 2,
      title: "Embutidos",
      image: "/delicious-picnic-still-life.jpg",
      alt: "Fiambres",
      description:
        "Una selección de embutidos premium perfectos para cualquier ocasión.",
    },
    {
      id: 3,
      title: "Tablas",
      image: "/world-tapa-s-day-celebration-with-snacks.jpg",
      alt: "Tablas",
      description:
        "Tablas personalizadas con combinaciones únicas de quesos y fiambres.",
    },
  ];

  return (
    <div
      className="container-fluid curva-dark section-height d-flex flex-column align-items-center justify-content-center"
      data-aos="fade-right"
    >
      <div className="bg-category">
        <div className="container text-center mb-4">
          <h2 className="mb-4 display-4 fw-bold">
            Los mejores alimentos artesanales del mundo, entregados a domicilio.
          </h2>
          <p className="lead">Descubrí nuestras categorías más populares</p>
          <div className="row justify-content-center">
            {categories.map((category, index) => (
              <div key={index} className="col-12 col-md-4 mb-5">
                <Link
                  to={`/comprar?categoryId=${category.id}`}
                  className="card-link w-100"
                >
                  <div className="card border-0 h-100 shadow card-bg-color ">
                    <div className="overflow-hidden">
                      <img
                        src={category.image}
                        className="card-img-top-categories img-hover"
                        alt={category.alt}
                        style={{ transition: "transform 0.3s ease" }}
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title font-weight-bold">
                        {category.title}
                      </h4>
                      <p className="card-text text-muted mb-3">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCategories;
