import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
// import products from "../../data/products";

function ProductCarousel() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      setFeaturedProducts(response.data);
    };
    fetchFeaturedProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  const filteredProducts = featuredProducts.filter(
    (product) => product.featured === true
  );

  return (
    <div className="section-height  d-flex flex-column align-items-center justify-content-center mb-4">
      <div className="container p-0 " data-aos="fade-left">
        <h2 className="text-center mb-4 display-4 fw-bold">
          <i className="bi bi-stars fs-2 me-2"></i>
          Productos Destacados
          <i className="bi bi-stars fs-2 ms-2"></i>
        </h2>
        <div>
          {filteredProducts && filteredProducts.length > 0 ? (
            <Slider {...settings}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          ) : (
            <p>No hay productos</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
