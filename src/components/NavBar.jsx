import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import Search from "./Search";
import Swal from "sweetalert2";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [showDropdown, setShowDropdown] = useState(false);

  const isAuthenticated = Boolean(user.token);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro/a que querés cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      confirmButtonColor: "#c4a289",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d65a31",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOut());
        navigate("/login");
      }
    });
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      toggleDropdown();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-color shadow-sm py-1 fixed-top">
        <Container
          fluid
          className="container d-flex align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center">
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center me-3"
            >
              <img
                src="/logo-igourmet.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "40px" }}
              />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="align-items-center ">
              <Nav.Link as={Link} to="/" className="fs-5 navbar-link me-2">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sobre-este-proyecto"
                className="fs-5 fw-bolder navbar-link me-2"
              >
                Sobre Este Proyecto
              </Nav.Link>
              <Nav.Link as={Link} to="/comprar" className="fs-5 navbar-link">
                Comprar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block me-4">
              <Search />
            </div>

            <div className="d-flex align-items-center me-3 responsive-actions">
              <div
                className="position-relative"
                onMouseLeave={() => {
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 1000);
                }}
              >
                {isAuthenticated ? (
                  <>
                    <div className="status-circle-profile bg-success"></div>
                    <i
                      className="bi bi-person-fill fs-3 navbar-link"
                      onClick={handleUserIconClick}
                    ></i>
                    {showDropdown && (
                      <div className="position-absolute bg-white shadow-sm p-2 dropdown-icon">
                        <Nav.Link
                          as={Link}
                          to="/usuario"
                          className="dropdown-item py-1"
                        >
                          Ver Perfil
                        </Nav.Link>
                        <Nav.Link
                          as={Link}
                          to="/usuario/ordenes"
                          className="dropdown-item py-1"
                        >
                          Ver Órdenes
                        </Nav.Link>
                        <Nav.Link
                          onClick={handleLogout}
                          className="dropdown-item py-1"
                        >
                          Logout
                        </Nav.Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Nav.Link>
                    <div className="status-circle-profile bg-danger"></div>
                    <i
                      className="bi bi-person fs-3 navbar-link"
                      onClick={handleUserIconClick}
                    ></i>
                  </Nav.Link>
                )}
              </div>

              <Nav.Link
                href="/carrito"
                className="d-flex align-items-center position-relative icon-cart"
              >
                <div className="number-cart-circle bg-white">
                  <span className="text-dark">
                    {cart.reduce((acc, item) => acc + item.qty, 0)}
                  </span>
                </div>
                <i className="bi bi-bag fs-5 navbar-link"></i>
              </Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
