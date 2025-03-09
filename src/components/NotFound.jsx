import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container d-flex flex-column justify-content-center align-items-center vh-100">
      <iframe
        src="https://lottie.host/embed/e0c08aa9-c4a2-4e35-91df-a49e66d23ffc/Z7b669gNJW.lottie"
        title="404 Animation"
        className="img-fluid"
      ></iframe>
      <p className="notfound-text text-center fs-4 mt-3">
        ¡Ups! La página que buscás no existe.
      </p>
      <Link to="/" className="notfound-link py-1 px-2 verdana">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
