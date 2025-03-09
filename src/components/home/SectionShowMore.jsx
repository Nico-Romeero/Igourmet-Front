import { Link } from "react-router-dom";

function SectionShowMore() {
  return (
    <div
      className="container section-heigth d-flex flex-column align-items-center justify-content-center mb-5"
      data-aos="fade-right"
    >
      <div className="show-more-banner">
        <div className="show-more-content">
          <h2 className="text-white">
            No te quedes con las ganas. Vení y conocé nuestros quesos únicos que
            cuentan una historia en cada bocado.
          </h2>
          <Link to="/comprar">
            <button className="px-2 rounded">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionShowMore;
