import React, { useEffect, useState } from "react";
import ProductCard from "../home/ProductCard";
import axios from "axios";
import "./shop.css";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStringCategory = searchParams.get("categoryId");
  const [selectedCategory, setSelectedCategory] = useState(
    queryStringCategory ? queryStringCategory : 0
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_API_URL
        }/products?categoryId=${selectedCategory}`,
      });
      setProducts(response.data);
    };
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/categories`,
      });
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="banner-container mt-5 mb-4">
        <img
          src="food-drink-table.jpg"
          alt="banner Product List"
          className="img-fluid"
        />
      </div>

      <div className="text-center mb-4">
        <h2 className="display-4 fw-bold mb-4">Listado de productos</h2>
        <div className="d-flex justify-content-center w-75 select-container">
          <select
            className="form-select form-select-lg mb-3" 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option className="choose-option" value={0}>
              Mostrar todos
            </option>
            {categories.map((category) => {
              if (category.id === Number(selectedCategory)) {
                return (
                  <option selected value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              } else {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              }
            })}
          </select>
        </div>
        {/*<h5>Subcategorias: de cada una de las de arriba</h5>*/}
      </div>
      <div className="container ">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-10 col-md-4 col-lg-3 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
