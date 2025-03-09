import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import axios from "axios";
import OrderModal from "../user/OrderModal";
import "./cart.css";
import { emptyCart } from "../../redux/cartSlice";

function CheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    zipCode: "",
    country: "",
    region: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingCost = 200;
  const total = subtotal + shippingCost;

  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
    setContactInfo({
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: user.phoneNumber,
      email: user.email,
    });
    setShippingInfo({
      address: user.address,
      zipCode: user.zipCode,
      country: user.country,
      region: user.region,
    });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setIsConfirmed(false);

    const order = {
      contactInfo,
      shippingInfo,
      paymentInfo,
      cart,
      total,
    };
    try {
      await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        data: order,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTimeout(() => {
        setIsProcessing(false);
        setIsConfirmed(true);
        dispatch(emptyCart());
      }, 4000);
    } catch (error) {
      setIsProcessing(false);
      console.error("Error procesando la orden:", error);
    }
  };
  return (
    <div className="carrito-view p-3 min-vh-100">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <OrderModal isProcessing={isProcessing} isConfirmed={isConfirmed} />
        <div className="card-style rounded carrito-bg-color shadow col-lg-6 col-md-8 col-11 ">
          <div className="position-relative">
            <Link to="/carrito" className="position-absolute pt-2 start-0 mb-3">
              <i className="bi bi-arrow-left ms-3 text-color"></i>
            </Link>
            <div className="text-center line-border py-1">
              <h1 className=" fs-md-4 orders-title">Resumen de compra</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="line-border px-4 py-4">
              <h4 className="fs-6 fs-md-5 text-color">
                Información de contacto
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 rounded checkout-input text-color"
                    placeholder="Nombre"
                    value={contactInfo.firstname}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        firstname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Apellido"
                    value={contactInfo.lastname}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        lastname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Número de teléfono"
                    value={contactInfo.phoneNumber}
                    onChange={(e) =>
                      setContactInfo({
                        ...contactInfo,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    required
                    className="form-control checkout-input rounded text-color"
                    placeholder="Correo electrónico"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Información de envío */}
            <div className="line-border px-4 py-4">
              <h4 className="fs-6 fs-md-5 text-color">Información de envío</h4>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Dirección"
                    value={shippingInfo.address}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Código postal"
                    value={shippingInfo.zipCode}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        zipCode: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <CountryDropdown
                    required
                    defaultOptionLabel="Seleccionar país"
                    value={shippingInfo.country}
                    onChange={(val) =>
                      setShippingInfo({ ...shippingInfo, country: val })
                    }
                    className="form-control mb-3 checkout-input rounded text-color"
                  />
                </div>
                <div className="col-md-6">
                  <RegionDropdown
                  required
                    country={shippingInfo.country}
                    value={shippingInfo.region}
                    defaultOptionLabel="Seleccionar región"
                    onChange={(val) =>
                      setShippingInfo({ ...shippingInfo, region: val })
                    }
                    className="form-control checkout-input rounded text-color"
                  />
                </div>
              </div>
            </div>

            {/* Método de pago */}
            <div className="line-border px-4 py-4">
              <h4 className="fs-6 fs-md-5 text-color">Método de pago</h4>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Número de tarjeta"
                    value={paymentInfo.cardNumber}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        cardNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control mb-3 checkout-input rounded text-color"
                    placeholder="Fecha de expiración (MM/AA)"
                    value={paymentInfo.expiryDate}
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        expiryDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    className="form-control checkout-input rounded text-color"
                    placeholder="cvv"
                    value={paymentInfo.cvv}
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-color">Subtotal:</h6>
                <h6 className="text-color">${subtotal}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-color">Costo de envío:</h6>
                <h6 className="text-color">${shippingCost}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-color">Total a pagar:</h6>
                <h6 className="text-color">${total}</h6>
              </div>
            </div>

            {/* Botón de compra */}
            <div className="px-4 py-3">
              <button
                type="submit"
                className="checkout-btn rounded px-3 w-100 py-2"
              >
                Comprar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
