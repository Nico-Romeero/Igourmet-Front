import { useState } from "react";
import "./StyleAuth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/users`,
        data: {
          firstname,
          lastname,
          email,
          phoneNumber,
          password,
          address,
          country,
          region,
          zipCode,
        },
      });
      navigate("/login");
    } catch (err) {
      console.error("Error al crear usuario:", err);
    }
  };
  return (
    <>
      <div className="login-container d-flex justify-content-center align-items-center ">
        <div className="row w-75 shadow h-75">
          <div className="col-md-5 col-lg-7 d-md-flex left-col p-4 flex-column justify-content-between rounded-start signup-image">
            <img src="/logo-igourmet.png" alt="Logo" className="signup-logo" />
          </div>
          <div className="col-12 col-lg-5 corners bg-white py-4 d-flex flex-column  justify-content-center px-4 px-lg-5">
            <h2 className="">Registráte</h2>
            <p>Ingresá tus datos y disfrutá de Igourmet.</p>
            <form onSubmit={handleCreateUser} className="w-100">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label hidden htmlFor="firstname">
                    Nombre
                  </label>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    name="firstname"
                    required
                    id="firstname"
                    placeholder="Nombre"
                    className="form-control p-1"
                    value={firstname}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label hidden htmlFor="lastname">
                    Apellido
                  </label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    name="lastname"
                    required
                    id="lastname"
                    placeholder="Apellido"
                    className="form-control p-1"
                    value={lastname}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label hidden htmlFor="email">
                  Correo electónico
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  required
                  id="email"
                  placeholder="Correo electrónico"
                  className="form-control p-1 w-100"
                  value={email}
                />
              </div>
              <div className="mb-2">
                <label hidden htmlFor="password">
                  Password:
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  required
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className="form-control p-1 w-100"
                  value={password}
                />
              </div>
              <div className="mb-2">
                <label hidden htmlFor="phoneNumber">
                  Número de teléfono:
                </label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  name="phoneNumber"
                  required
                  id="phoneNumber"
                  placeholder="Número de teléfono"
                  className="form-control p-1 w-100"
                  value={phoneNumber}
                />
              </div>

              {/* Dirección */}
              <div className="mb-2">
                <label hidden htmlFor="address">
                  Dirección:
                </label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  required
                  id="address"
                  placeholder="Dirección"
                  className="form-control p-1 w-100"
                  value={address}
                />
              </div>

              <div className="row mb-2">
                <div className="col-md-6 mb-2">
                  <CountryDropdown
                    required
                    className="form-control rounded"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div className="col-md-6">
                  <RegionDropdown
                    required
                    className="form-control rounded"
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label hidden htmlFor="zipCode">
                  Código postal:
                </label>
                <input
                  name="zipCode"
                  required
                  id="zipCode"
                  placeholder="Código postal"
                  className="form-control p-1 w-100"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <button className="w-100 mb-2 border-0 p-1 rounded text-white">
                Registráte
              </button>
            </form>

            <p className="text-center">
              ¿Ya tenés una cuenta? <Link to="/login">Iniciá sesión acá.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
