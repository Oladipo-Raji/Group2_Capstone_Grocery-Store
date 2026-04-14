import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/signup.css";

export default function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mode, setMode] = useState(
    location.pathname === "/login" ? "signin" : "signup",
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      // ================= SIGN UP =================
      if (mode === "signup") {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        const res = await axios.post("http://localhost:5000/api/auth/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        // ✅ SAVE USER (IMPORTANT FOR HEADER)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("freshcartLoggedIn", "true");
        localStorage.setItem(
          "freshcartUser",
          JSON.stringify({
            ...res.data.user,
            firstName: res.data.user.name.split(" ")[0],
          }),
        );

        navigate("/"); // ✅ go home
        return;
      }

      // ================= SIGN IN =================
      if (mode === "signin") {
        const res = await axios.post("http://localhost:5000/api/auth/signin", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("freshcartLoggedIn", "true");
        localStorage.setItem(
          "freshcartUser",
          JSON.stringify({
            ...res.data.user,
            firstName: res.data.user.name.split(" ")[0],
          }),
        );

        navigate("/"); // ✅ go home
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        {/* LOGO */}
        <div className="auth-logo">
          <span>🛒</span>
          <span>FreshCart</span>
        </div>

        {/* TABS */}
        <div className="auth-tabs">
          <button
            className={mode === "signin" ? "auth-tab active" : "auth-tab"}
            onClick={() => setMode("signin")}
          >
            Sign In
          </button>

          <button
            className={mode === "signup" ? "auth-tab active" : "auth-tab"}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <h2>{mode === "signup" ? "Create Account" : "Welcome Back"}</h2>

        <p className="auth-subtitle">
          {mode === "signup"
            ? "Create your FreshCart account to start shopping."
            : "Sign in to continue with your FreshCart account."}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {mode === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "signup"
                ? "Create Account"
                : "Sign In"}
          </button>
        </form>

        <p className="auth-switch-link">
          {mode === "signup" ? "Already have an account?" : "New to FreshCart?"}

          <Link
            to={mode === "signup" ? "/login" : "/signup"}
            onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
          >
            {mode === "signup" ? " Sign in" : " Create account"}
          </Link>
        </p>
      </div>
    </section>
  );
}
