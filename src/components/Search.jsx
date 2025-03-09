import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/search`,
          params: { query },
        });
        setResults(response.data);
        setShowDropdown(true);
      } catch (err) {
        console.error("Error al buscar productos", err);
      }
    };
    const delayDebounce = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <>
      <div style={{ position: "relative" }} >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          style={{ padding: "5px", width: "100%", }}
          className="border-0 rounded ps-4 search-input"
        />

        {showDropdown && results.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              zIndex: 1000,
            }}
          >
            {results.map((product) => (
              <div
                key={product.id}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Link to={`/comprar/${product.slug}`} className="text-decoration-none">
                  <img
                    src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${
                      product.image
                    }`}
                    alt={product.name}
                    className="img-fluid me-2 rounded"
                    width="30px"
                  />
                  <strong>{product.name}</strong>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
