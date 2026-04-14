import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = useMemo(
    () => JSON.parse(localStorage.getItem("freshcartUser") || "null"),
    [],
  );
  const loggedIn = localStorage.getItem("freshcartLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.setItem("freshcartLoggedIn", "false");
    navigate("/login");
  };

  if (!loggedIn || !user) {
    return (
      <section className="profile-page">
        <div className="profile-card">
          <h1>Profile</h1>
          <p>You are not logged in.</p>
          <Link to="/login" className="profile-link-btn">
            Go to Login
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-card">
        <h1>My Profile</h1>
        <p className="profile-subtitle">
          Your account details are shown below.
        </p>

        <div className="profile-row">
          <span className="profile-label">Full Name</span>
          <span className="profile-value">{user.name || "FreshCart User"}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{user.email}</span>
        </div>

        <div className="profile-actions">
          <Link to="/" className="profile-link-btn">
            Back to Home
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="profile-logout-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
