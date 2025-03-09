import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";
import Swal from "sweetalert2"; // Importa SweetAlert2

function UserProfile() {
  const [userInfo, setUserInfo] = useState({});
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!user.token) navigate("/login");
    const fetchUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/users/${user.userId}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUserInfo(response.data);
    };
    fetchUser();
  }, [user.token, user.userId]);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro/a que querés cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d48c55",
      cancelButtonColor: "#d65a31",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logOut());
        navigate("/login");
      }
    });
  };

  return (
    <div className="profile-bg mt-4 p-4">
      <div className="container mb-4 mt-3 rounded">
        <div className="text-center">
          <h1 className="mb-2 orders-title">¡Hola, {userInfo.firstname}!</h1>
        </div>
        <div className="rounded data-card p-4 shadow mb-2">

          <div className="row mb-3">
            <div className="col-12">
              <label
                htmlFor="firstName"
                className="form-label fw-bold fs-5 text-color"
              >
                Nombre completo:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.firstname} {userInfo.lastname}
              </span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <label
                htmlFor="email"
                className="form-label fw-bold fs-5 text-color"
              >
                Correo electrónico:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.email}
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <label
                htmlFor="phone"
                className="form-label fw-bold fs-5 text-color"
              >
                Número de teléfono:
              </label>
              <span className="d-block pb-2 fs-5 text-color-units line-border">
                {userInfo.phoneNumber}
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <label
                htmlFor="address"
                className="form-label fw-bold fs-5 text-color"
              >
                Dirección:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.address}
              </span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <label
                htmlFor="country"
                className="form-label fw-bold fs-5 text-color"
              >
                País:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.country}
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <label
                htmlFor="region"
                className="form-label fw-bold fs-5 text-color"
              >
                Región:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.region}
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <label
                htmlFor="zip"
                className="form-label fw-bold fs-5 text-color"
              >
                Código Postal:
              </label>
              <span className="d-block line-border pb-2 fs-5 text-color-units">
                {userInfo.zipCode}
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <Link to="/usuario/ordenes">
              <button className="rounded p-2 not-action-color me-3">
                Ver mis órdenes
              </button>
            </Link>
            <Link to={`/usuario/editar/${userInfo.id}`}>
              <button className="rounded p-2">Editar mis datos</button>
            </Link>
          </div>
        </div>

        <h6 className="data-card rounded btn border" onClick={handleLogout}>
          <i className="bi bi-box-arrow-left text-color"></i>
        </h6>
      </div>
    </div>
  );
}

export default UserProfile;
