import React from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";

const topSellingProducts = [
  {
    id: 1,
    name: "Fresh Avocado",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 2.49,
    image:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8"
  },
  {
    id: 3,
    name: "Fresh Milk",
    price: 4.29,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    id: 4,
    name: "Brown Eggs",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1518568740560-333139a27e72"
  }
];

const TopSelling = () => {
  return (
    <section className="featured">
      <div className="featured-header">
        <h2>Top Selling Products</h2>
        <span>More →</span>
      </div>

      <div className="product-grid">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
