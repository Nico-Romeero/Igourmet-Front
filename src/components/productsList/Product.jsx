import React, { useEffect, useState } from "react";
import ProductCarousel from "../home/ProductCarousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const fetchProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/${params.slug}`,
      });
      setProduct(response.data);
    };
    fetchProduct();
  }, [params.slug]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success(`¡${product.name} agregado al carrito!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mt-4 mb-5 min-vh-100">
      <div className="row">
        <div className="col-12 col-md-6 mt-5 mb-4 mb-md-0">
          <img
            src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${product.image}`}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="col-12 col-md-6 mt-5 d-flex flex-column align-items-center justify-content-between">
          <h1 className="fw-bold">{product.name}</h1>
          <p className="p-4 fs-5"> {product.description} </p>
          <p className="fs-2 fw-bold">${product.price} </p>
          <button onClick={handleAddToCart} className="w-75 p-2 rounded">
            Añadir al carrito
          </button>
        </div>
      </div>
      <div>
        <ProductCarousel />
      </div>
    </div>
  );
}

export default Product;
