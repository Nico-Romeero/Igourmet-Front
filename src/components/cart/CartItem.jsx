import React from "react";
import "./cart.css";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };
  const handleIncrement = () => {
    dispatch(incrementQty(item));
  };

  const handleDecrement = () => {
    dispatch(decrementQty(item));
  };
  const handleSweetAlert = () => {
    Swal.fire({
      title: `¿Seguro/a que quieres eliminar ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c4a289",
      cancelButtonColor: "#d65a31",
      confirmButtonText: "Sí, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoveFromCart(item);
        Swal.fire({
          title: "¡Eliminado!",
          text: `${item.name} fue eliminado del carrito.`,
          icon: "success",
          confirmButtonColor: "#d65a31",
        });
      }
    });
  };

  return (
    <div className="container carrito-bg-color shadow rounded p-3 mb-3">
      <div className="row w-100 h-100">
        <div className="col-4 col-md-12 col-lg-2 text-center">
          <img
            src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${item.image}`}
            alt={item.name}
            className="cart-item-img rounded"
          />
        </div>
        <div className="col-8 col-md-12 col-lg-6">
          <div className="text-start d-flex flex-column justify-content-center">
            <h2 className="fs-5 fw-bold text-color">{item.name}</h2>
            <h6 className="text-color-units">{item.subdescription}</h6>
            <h5 className="text-color">${item.price}</h5>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-end mt-3 mt-md-0">
          <Link>
            <i
              onClick={() => item.qty > 1 && handleDecrement()}
              className="bi bi-cart-dash btn icon-hover text-color"
            ></i>
          </Link>
          <input
            type="text"
            min="1"
            value={item.qty}
            className="form-control form-control-sm text-center carrito-bg-color-input rounded text-white"
            readOnly
          />
          <Link>
            <i
              onClick={handleIncrement}
              className="bi bi-cart-plus btn icon-hover me-3 text-color"
            ></i>
          </Link>
          <Link>
            <i
              onClick={handleSweetAlert}
              className="bi bi-trash3 btn icon-hover text-color"
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
