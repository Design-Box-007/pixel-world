import React from "react";
import "./Industries.css";
import { Helmet } from "react-helmet";
import ExploreImageOne from "../assets/Industries/mainImage.jpg";
import { Link } from "react-router-dom";
import industriesData from "../data/industriesData";

const Industries = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "LED Display & Digital Kiosk Solutions",
    provider: {
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae/industries",
      logo: "https://www.pixelworld.ae/images/logo.png",
      areaServed: [
        "Dubai",
        "UAE",
        "Saudi Arabia",
        "Oman",
        "Kuwait",
        "Qatar",
        "Bahrain",
      ],
    },
    description:
      "PixelWorld provides LED screen and kiosk solutions for retail, corporate, hospitality, healthcare, exhibitions, homes, events, outdoor advertising, and malls in Dubai & GCC.",
  };

  return (
    <div className="container-fluid">
      <Helmet>
        <title>
          Industries We Serve | PixelWorld LED Screens & Digital Kiosks in Dubai
          & GCC
        </title>
        <meta
          name="description"
          content="PixelWorld delivers premium LED screens and digital kiosk solutions for retail, corporate, hospitality, healthcare, exhibitions, homes, events, outdoor advertising, and malls across Dubai, UAE & GCC."
        />
        <meta
          name="keywords"
          content="LED screens Dubai, LED displays for retail UAE, LED kiosks hospitality, healthcare LED screens, exhibition LED Dubai, event LED rental UAE, outdoor advertising LED screens, mall LED displays Dubai"
        />
        <link rel="canonical" href="https://www.pixelworld.ae/industries" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta
          property="og:title"
          content="Industries We Serve | PixelWorld LED Screens in Dubai & GCC"
        />
        <meta
          property="og:description"
          content="Explore PixelWorld LED display & kiosk solutions for retail, corporate offices, hospitality, healthcare, exhibitions, events, outdoor advertising & malls in Dubai & GCC."
        />
        <meta
          property="og:image"
          content="https://www.pixelworld.ae/images/industries-led-solutions.jpg"
        />
        <meta
          property="og:url"
          content="https://www.pixelworld.ae/industries"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industries We Serve | PixelWorld Dubai"
        />
        <meta
          name="twitter:description"
          content="Premium LED solutions for retail, corporate, healthcare, hospitality, events & advertising across UAE & GCC."
        />
        <meta
          name="twitter:image"
          content="https://www.pixelworld.ae/images/industries-led-solutions.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="hero-image-container rounded mb-4">
        <img
          src={ExploreImageOne}
          alt="Main LED Display"
          width="100%"
          height="100%"
          className="hero-container"
        />
        <div className="blog-image-overlay"></div>
        <div className="blog-content">
          <div className="d-flex align-items-center flex-column">
            {/* <h2 className='hero-title'>Pixel World</h2> */}
            {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
          </div>
          <div className="blog-subcontent">
            <h2 className="blog-text">Industries</h2>
            <h1 className="blog-title">
              Illuminating Ideas: Explore Our High Quality LED Solutions
            </h1>
            <h2 className="blog-text">
              Pixelworld delivers premium LED solutions with global support
              across various sectors.
            </h2>
          </div>
        </div>
      </div>

      <h2 className="product-title text-white">Our Industries</h2>

      <div className="d-flex justify-content-between align-items-center">
        <div className="row">
          {industriesData.map((item, index) => (
            <div key={index} className="col-md-4">
              <Link
                onClick={handleScrollToTop}
                to={`/industry/${item.industryKey}`}
                className="text-decoration-none text-dark"
              >
                <div className="service-item">
                  <div className="service-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="service-image"
                      loading="lazy"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <h5 className="service-text content-t2-w">{item.title}</h5>
                  <p className="content-d-w">{item.subtitle}</p>
                  <button className="blog-button">Learn more</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
