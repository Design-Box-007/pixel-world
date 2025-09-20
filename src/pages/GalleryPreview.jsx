import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryPreview.css"; // custom css file
import { OurProjectLeft, OurProjectRight } from "../data/ProjectsData";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PixelWorld",
    url: "https://www.pixelworld.ae/projects",
    logo: "https://www.pixelworld.ae/logo.png",
    image: "https://www.pixelworld.ae/assets/projects-gallery.jpg",
    description:
      "PixelWorld delivers LED screen installations across Dubai, Abu Dhabi & Sharjah. Specializing in indoor & outdoor LED displays, kiosks, and signage.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "408, Appartment M02, Persia cluster, International city",
      addressLocality: "Dubai",
      addressCountry: "UAE",
    },
    telephone: "+971585321473",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573776366139",
      "https://x.com/Pixelworldfzc",
      "https://www.instagram.com/pixelworldfzc",
    ],
  };

  return (
    <div className="row">
      <Helmet>
        {/* ✅ Basic SEO */}
        <title>
          Projects & LED Screen Installations in Dubai | PixelWorld UAE
        </title>
        <meta
          name="description"
          content="Explore PixelWorld’s LED screen projects across Dubai, Abu Dhabi & Sharjah. From indoor & outdoor LED displays to custom digital kiosks, see why we’re the No.1 LED screen supplier in UAE."
        />
        <meta
          name="keywords"
          content="LED screens Dubai, LED screen supplier UAE, indoor LED screens Dubai, outdoor LED screens Dubai, digital kiosks UAE, LED video wall installation Dubai, LED signage UAE, customized LED screens Dubai"
        />
        <link
          rel="canonical"
          href="https://www.pixelworld.ae/led-screen-projects-dubai"
        />

        {/* ✅ Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="Projects & LED Screen Installations in Dubai | PixelWorld UAE"
        />
        <meta
          property="og:description"
          content="Discover PixelWorld’s portfolio of indoor & outdoor LED screen installations across UAE. Trusted by top brands, hotels & government clients."
        />
        <meta
          property="og:url"
          content="https://www.pixelworld.ae/led-screen-projects-dubai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.pixelworld.ae/assets/projects-gallery.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects & LED Screen Installations in Dubai | PixelWorld UAE"
        />
        <meta
          name="twitter:description"
          content="Explore LED screen installations in Dubai, Abu Dhabi & Sharjah. PixelWorld is the No.1 LED display supplier in UAE."
        />
        <meta
          name="twitter:image"
          content="https://www.pixelworld.ae/assets/projects-gallery.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <h2 className="services-title my-3 content-t-w">Our Projects</h2>

      {/* Left Projects */}
      {OurProjectLeft.map((project, index) => (
        <div key={`left-${index}`} className="col-lg-4 col-md-6 mb-4">
          <div
            className="our-projects-image-container w-100"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.place}
              width="100%"
              height="100%"
              className="our-projects-image"
            />
            <div className="hero-image-overlay"></div>
            <div className="our-projects-content">
              <h6>{project.place}</h6>
              <p className="m-0">{project.model}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Right Projects */}
      {OurProjectRight.map((project, index) => (
        <div key={`right-${index}`} className="col-lg-4 col-md-6 mb-4">
          <div
            className="our-projects-image-container w-100"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.place}
              width="100%"
              height="100%"
              className="our-projects-image"
            />
            <div className="hero-image-overlay"></div>
            <div className="our-projects-content">
              <h6>{project.place}</h6>
              <p className="m-0">{project.model}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="modal-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
