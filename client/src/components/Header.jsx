import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { cartItemCount } from "../utils/cartStorage";


const Header = () => {
  const [cartCount, setCartCount] = useState(cartItemCount());
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    loadUser();

    window.addEventListener("storage", loadUser);
    window.addEventListener("login", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("login", loadUser);
    };
  }, []);

  useEffect(() => {
    const onCartChange = () => setCartCount(cartItemCount());
    window.addEventListener("freshcart-cart-updated", onCartChange);
    return () =>
      window.removeEventListener("freshcart-cart-updated", onCartChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("freshcartLoggedIn");

    window.dispatchEvent(new Event("login")); // update UI
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛒 FreshCart
        </Link>

        {/* <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div> */}

        <div className="header-icons">
          <span className="icon">❤️</span>
          <span className="icon">🔔</span>

          <Link to="/cart" className="cart-btn">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* ✅ USER */}
          {user ? (
            <div className="user-menu">
              <div className="avatar">{user.name?.charAt(0).toUpperCase()}</div>

              <div className="dropdown">
                <p>{user.name}</p>
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/signup" className="signin-btn">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
