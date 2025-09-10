import React, { useEffect, useState } from "react";
import exploreData from "../data/exploreData";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ExploreImageOne from "../assets/Indoor Led display.jpg";
import logo from "../assets/px-logo-web.png";

const Blog = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Explore the World of LED Displays | Pixelworld",
    description:
      "Discover insights, trends, and solutions for events, advertising, and beyond with our recent news posts and featured articles on LED displays.",
    url: "https://www.pixelworld.ae/blog",
    publisher: {
      "@type": "Organization",
      name: "Pixelworld",
      logo: {
        "@type": "ImageObject",
        url: { logo }, // Replace with your actual logo URL
      },
    },
    image: {
      "@type": "ImageObject",
      url: ExploreImageOne,
      height: 800, // Replace with actual height of the image
      width: 1200, // Replace with actual width of the image
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.pixelworld.ae/blog",
    },
  };
  return (
    <div className="container-fluid">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Explore the World of LED Displays | Pixelworld</title>
        <meta
          name="description"
          content="Discover insights, trends, and solutions for events, advertising, and beyond with our recent news posts and featured articles on LED displays."
        />
        <meta
          property="og:title"
          content="Explore the World of LED Displays | Pixelworld"
        />
        <meta
          property="og:description"
          content="Discover insights, trends, and solutions for events, advertising, and beyond with our recent news posts and featured articles on LED displays."
        />
        <meta property="og:image" content={ExploreImageOne} />
        <meta property="og:url" content="https://www.pixelworld.ae/blog" />
        <meta
          name="twitter:title"
          content="Explore the World of LED Displays | Pixelworld"
        />
        <meta property="og:type" content="blogs" />
        <meta
          name="twitter:description"
          content="Discover insights, trends, and solutions for events, advertising, and beyond with our recent news posts and featured articles on LED displays."
        />
        <meta name="twitter:image" content={ExploreImageOne} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.pixelworld.ae/blog" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="hero-image-container rounded mb-4">
        <img
          src={ExploreImageOne}
          alt="ExploreImageOne"
          width="100%"
          height="100%"
          className="hero-image rounded"
        />
        <div className="blog-image-overlay"></div>
        <div className="blog-content">
          <div className="d-flex align-items-center flex-column">
            {/* <h2 className='hero-title'>Pixel World</h2> */}
            {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
          </div>
          <div className="blog-subcontent">
            <h2 className=" blog-text">Featured</h2>
            <h1 className=" blog-title">
              Illuminating Ideas: Explore the World of LED Displays
            </h1>

            <h2 className=" blog-text">
              Discover insights, trends, and solutions for events, advertising,
              and beyond.
            </h2>
          </div>
        </div>
      </div>
      <h2 className="product-title">Recent News Post</h2>
      <div className="d-flex justify-content-between align-items-center">
        <div className="row">
          {exploreData.map((item, index) => (
            <>
              <div key={index} className="col-md-4">
                <Link
                  onClick={handleScrollToTop}
                  to={`/blog/${item.blogKey}`}
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
                    <p className="service-text">{item.title}</p>
                    <button className="blog-button">Read more</button>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
