import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import FAQ from "./components/FAQ";
import Product from "./pages/Product";
import BlogIndividualPage from "./pages/BlogIndividualPage";
import Blog from "./pages/Blog";
// import Products from './pages/Products';
import Industries from "./pages/Industries";
import Industry from "./pages/IndustryIndividualPage";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhatsappProfileImage from "./assets/whatsapp-profile.jpg";
import ContactUs from "./components/ContectUs";
import ScrollToTopButton from "./components/ScrollToTop";

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
      <FloatingWhatsApp
        phoneNumber="+971 58 532 1473"
        allowClickAway
        chatMessage="Hi How can we help you?"
        statusMessage="Sales Team"
        accountName="Pazhanivel"
        avatar={WhatsappProfileImage}
      />
      <div className="contactUs">
        <ContactUs />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
