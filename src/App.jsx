import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import FAQ from "./components/FAQ";
import Product from "./pages/Product";
import BlogIndividualPage from "./pages/BlogIndividualPage";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import Industry from "./pages/IndustryIndividualPage";
import WhatsappProfileImage from "./assets/whatsapp-profile.jpg";
import ContactUs from "./components/ContectUs";
import ScrollToTopButton from "./components/ScrollToTop";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const phoneNumber = "+971585321473"; // Client phone number without spaces

function CustomWhatsAppButton() {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        zIndex: 1000,
      }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      type="button"
    >
      <FaWhatsapp size={40} color="#ffffff" />
    </button>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="global">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Services />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry/:industryKey" element={<Industry />} />
          <Route path="/product/:productKey" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogKey" element={<BlogIndividualPage />} />
          <Route path="/contact" />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <ScrollToTopButton />

      {/* Custom WhatsApp button to open chat directly */}
      <CustomWhatsAppButton />

      <div className="contactUs">
        <ContactUs />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
