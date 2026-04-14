import { useEffect, useState } from "react";
import axios from "axios";
import AddToCartButton from "../components/AddToCartButton";
import "../styles/ProductSection.css";

const TopSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/top-selling")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="section">
      <div className="section-header">
        <h2>Top Selling Products</h2>
        <span className="more">More →</span>
      </div>

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

            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;
