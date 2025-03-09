import React, { useEffect, useState } from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { logOut } from "../../redux/userSlice";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function UserData() {
  const [userInfo, setUserInfo] = useState({});
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/users/${user.userId}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: userInfo,
    });

    navigate("/usuario");
  };
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleDeleteUser = async () => {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/users/${user.userId}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    handleLogout();
  };
  const handleSweetAlert = () => {
    Swal.fire({
      title: "¿Seguro/a que quieres eliminar tu usuario?",
      text: "Esta acción no se podrá revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d48c55",
      cancelButtonColor: "#d65a31",
      confirmButtonText: "Sí, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteUser(user);
        Swal.fire({
          title: "Usuario eliminado.",
          text: "Su usuario ha sido eliminado exitosamente.",
          icon: "success",
          confirmButtonColor: "#d65a31",
        });
      }
    });
  };

  return (
    <div className="profile-bg mt-4 p-4">
      <div className="container mt-3">
        <div className="text-center">
          <h1 className="mb-2 orders-title">Perfil del usuario</h1>
        </div>
        <div className="rounded data-card pb-1 px-3 shadow mb-2">
          <form className="mb-4" onSubmit={handleSave}>
            <div className="row g-3">
              <div className="col-md-6">
                <label
                  htmlFor="firstName"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.firstname}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, firstname: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="lastName"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Apellido:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.lastname}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, lastname: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="email"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="phone"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Número de teléfono:
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.phoneNumber}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="address"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Dirección:
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.address}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="zipCode"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Código Postal:
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="form-control data-card-input rounded fs-5 text-color-units"
                  value={userInfo.zipCode}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, zipCode: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="country"
                  className="form-label fs-5 fw-bold text-color"
                >
                  País:
                </label>
                <CountryDropdown
                  className="form-control rounded data-card-input text-color p-2 fs-5"
                  required
                  value={userInfo.country}
                  onChange={(val) =>
                    setUserInfo({ ...userInfo, country: val })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="zipCode"
                  className="form-label fs-5 fw-bold text-color"
                >
                  Región:
                </label>
                <RegionDropdown
                  className="form-control rounded data-card-input text-color p-2 fs-5 mb-2"
                  required
                  country={userInfo.country}
                  value={userInfo.region}
                  onChange={(val) =>
                    setUserInfo({ ...userInfo, region: val })
                  }
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/usuario">
                <button
                  type="button"
                  className="rounded p-2 not-action-color me-3"
                >
                  Cancelar
                </button>
              </Link>
              <button type="submit" className="rounded p-2">
                Confirmar
              </button>
            </div>
          </form>
        </div>
        <div>
          <button
            className="rounded data-card btn text-color border"
            onClick={handleSweetAlert}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserData;
