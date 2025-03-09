import React, { useRef } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./cart.css";
import CartTotalPrice from "./CartTotalPrice";
import { Link } from "react-router-dom"; // Importar el componente Link de React Router

function Cart() {
  const cart = useSelector((state) => state.cart);
  const scrollRef = useRef();

  const scrollDown = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carrito-view pt-3">
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold cart-title text-start ps-3 orders-title">
              Tu Carrito
            </h2>
          </div>
          {/* Condición para cuando el carrito está vacío */}
          {cart.length === 0 ? (
            <div className="col-12 empty-cart d-flex justify-content-center">
              <div className="text-center data-card p-4 w-100 d-flex flex-column justify-content-center">
                <h2 className="text-color mb-4">No hay productos en tu carrito :(</h2>
                <button className="rounded mx-auto px-3 py-1">
                  <Link to="/comprar" className="text-white text-decoration-none verdana py-3">
                    Añadir productos
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="col-md-7 col-lg-8 position-relative">
                <div
                  className="d-flex section-cart flex-column align-items-start me-md-2"
                  ref={scrollRef}
                >
                  {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                  ))}
                </div>
                <button
                  className="btn border-0 scroll-arrow rounded px-2"
                  onClick={scrollDown}
                >
                  <i className="bi bi-caret-down-fill"></i>
                </button>
              </div>
              <div className="col-md-5 col-lg-4">
                <CartTotalPrice />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
