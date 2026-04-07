import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Product";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
