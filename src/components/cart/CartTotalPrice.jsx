import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartTotalPrice() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const currentPage = useLocation();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleBuy = () => {
    if (user.token) {
      navigate("/checkout");
    } else {
      toast.error("Debes iniciar sesión para completar el pago", {
        hideProgressBar: true,
      });
      setTimeout(() => {
        navigate("/login", { state: currentPage.pathname });
      }, 2300);
    }
  };

  return (
    <>
      <div className="shadow rounded carrito-bg-color p-4 w-100">
        <h4 className="mb-4 fw-bold text-color">Resumen de compra:</h4>
        <div className="line-border mb-3">
          {cart.map((item) => (
            <div className="d-flex justify-content-between mb-2" key={item.id}>
              <h6 className="ms-2 d-flex">
                <div className="me-2 text-color-units">{item.name}</div>{" "}
                <div className="text-color-units">{item.qty > 1 && `x${item.qty}`}</div>
              </h6>
              <h6 className="me-2 text-color-units">${item.price * item.qty}</h6>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between pb-3">
          <h5 className="ms-2 text-color">Subtotal:</h5>
          <h5 className="me-2 text-color">${total}</h5>
        </div>
        <button onClick={handleBuy} className="w-100 rounded">
          Proceder al pago
        </button>
      </div>
    </>
  );
}

export default CartTotalPrice;
