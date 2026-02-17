import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import TopSelling from "./components/TopSelling";
import ShopByCategory from "./components/ShopByCategory";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <FeaturedProducts />
      <TopSelling />
      <ShopByCategory />
      <PromoBanner />
      <Footer />
    </>
  );
}

export default App;
