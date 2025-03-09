import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function CarouselHero() {
  return (
    <div data-aos="fade-right">
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/homepage1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="centered-caption-one rounded">
            <h2>Traé el mundo a casa</h2>
            <p>
              Los mejores alimentos especiales, quesos y regalos gourmet del
              país.
            </p>
            <Link to="/comprar">
              <button className="btn-now"> Descubrí </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/cheese-wood.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="centered-caption-two rounded">
            <h2>Sabor intenso para noches frías</h2>
            <p>Probá nuestro Vacherin Fribourgeois añejado en cueva.</p>
            <Link to="/comprar">
              <button className="btn-now"> Comprá ahora </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/homepage3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="centered-caption-tre">
            <h2>Dale vida a tu mesa navideña</h2>
            <p>
              Estas fiestas dejate maravillar por nuestro menú de Navidad y Año
              Nuevo.
            </p>
            <Link to="/comprar">
              <button className="btn-now"> Comprá ahora </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHero;
