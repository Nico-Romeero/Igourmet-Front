import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-style shadow">
      <div className="container">
        <div className="row py-3 g-0">
          <div className="col-12 col-md-2 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <div className="d-flex justify-content-center">
              <Link to="/">
                <img
                  src="https://igourmet.com/images/ig/igourmet_logo_53bdbb88-9930-49d5-8a1f-47f34a229eda_300x.png"
                  alt="Logo de Murray's Cheese"
                  className="img-fluid w-md-100"
                />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-between text-center text-md-start mb-4 mb-md-0 ps-md-4">
            <div className="d-flex flex-column">
              <Link to="/comprar" className="navbar-link">
                <h5 className="navbar-link fw-bold">Comprar</h5>
              </Link>
              <ul className="list-unstyled">
                <li>Quesos</li>
                <li>Fiambres</li>
                <li>Tablas</li>
              </ul>
            </div>
            <div className="d-flex flex-column">
              <Link to="/login" className="navbar-link">
                <h5 className="navbar-link fw-bold">Usuario</h5>
              </Link>
              <ul className="list-unstyled">
                <li>Iniciar sesión</li>
                <li>Registrarse</li>
              </ul>
            </div>
            <div className="d-flex flex-column">
              <Link to="/sobre-este-proyecto" className="navbar-link">
                <h5 className="navbar-link fw-bold">Sobre este proyecto</h5>
              </Link>
              <ul className="list-unstyled">
                <li>Organización previa</li>
                <li>Diseño</li>
                <li>Lenguajes y tecnologías</li>
              </ul>
            </div>
            <div className="d-flex flex-column me-4">
              <h5 className=" navbar-link fw-bold">Contacto</h5>
              <ul className="list-unstyled">
                <li>+1-888-MYCHEEZ</li>
                <li>contact@murrayscheese.com</li>
                <li>Todos los días de 9hs a 18hs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
