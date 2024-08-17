import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import MarqueeText from "./components/MarqueeText";

import Shop from "./pages/Shop";
import "./App.css";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <MarqueeText />
      <Navbar /> {/* Navbar bileşenini üst kısma ekliyoruz */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
