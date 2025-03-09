import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success(`¡${product.name} agregado al carrito!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="cardSlice cardSlice2 p-3">
      <Link to={`/comprar/${product.slug}`} className="card-link w-100">
        <img
          src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${product.image}`}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text text-muted">{product.subdescription}</p>
        </div>
      </Link>
      <p className="card-price fs-3 fw-bold">$ {product.price}</p>
      <button onClick={handleAddToCart} className="btn-cart">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
