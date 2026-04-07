import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductSection.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products. Make sure backend is running on port 5000.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="section">
      <div className="section-header">
        <h2>All Products</h2>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <div className="card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="card-body">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
              </div>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
