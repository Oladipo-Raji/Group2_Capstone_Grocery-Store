import React from "react";
import ProductCard from "./ProductCard";
import "../styles/product.css";

const products = [
  {
    id: 1,
    name: "Fresh Organic Broccoli",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1582515073490-dc0167c4d6f7"
  },
  {
    id: 2,
    name: "Sweet Red Cherry",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b"
  },
  {
    id: 3,
    name: "Seedless Watermelon",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa"
  },
  {
    id: 4,
    name: "Pure Honey",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured">
      <div className="featured-header">
        <h2>Featured Products</h2>
        <span>More →</span>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
