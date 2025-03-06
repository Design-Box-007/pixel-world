import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowCircleRight } from 'react-icons/fa';
import productData from '../data/productsData';
import { Link } from 'react-router-dom';

const Products = () => {
  // console.log(
  //   productData.map((product) => {
  //     return product.title;
  //   })
  // );

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  return (
    <>
      <Helmet>
        <title>Pixel World Products - LED Display & Digital Screen Dubai</title>
        <meta name="description" content="Pixel World offers top LED displays and digital screens in Dubai. Call now to get the best deals for your business or event needs." />
        <meta
          name="keywords"
          content="led display, digital screen, led screen dubai"
        />
        <meta name="author" content="Pixel World" />
        <link rel="canonical" href="https://www.pixelworld.ae/products" />
      </Helmet>
      <section className="projects" id="projects">
        <div className="pt-5 d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="projects-title">Innovative LED Displays for Every Need</h1>
          <p className="projects-description">
            Explore a wide range of high-performance LED solutions tailored for events, advertising, corporate setups, and more.
          </p>
        </div>

        <div className="my-5">
          <h2 className="projects-bg-title">Discover Our Product Range</h2>

          <div className="project-section">
            <header className="d-flex justify-content-between align-items-end">
              {/* <h3 className="bestsellers-title">Our Projects</h3> */}
              {/* <span className="bestsellers-subtext">Find the Right Fit</span> */}
            </header>

            <hr className="text-white" />

            <div className="row my-3 p-3">
              {productData.map((product, index) => (
                <>
                {index % 3 === 0 ? (
                <article key={index} className="col-md-8 mb-3">
                  <Link onClick={handleScrollToTop} className='text-decoration-none' to={product.link}>
                  <div className="illumination-card">
                    <figure className="illumination-card-image-container">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="illumination-card-image"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      />
                    </figure>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="illuminaion-card-title">{product.title}</h4>
                      <p className="illuminaion-card-text m-0">
                        <FaArrowCircleRight size={28} />
                      </p>
                    </div>
                  </div>
                  </Link>
                </article>) : (
                    <article key={index} className="col-md-4 mb-3">
                    <Link onClick={handleScrollToTop} className='text-decoration-none' to={product.link}>
                    <div className="illumination-card">
                      <figure className="illumination-card-image-container">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="illumination-card-image"
                          width="100%"
                          height="100%"
                          loading="lazy"
                        />
                      </figure>
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="illuminaion-card-title">{product.title}</h4>
                        <p className="illuminaion-card-text m-0">
                          <FaArrowCircleRight size={28} />
                        </p>
                      </div>
                    </div>
                    </Link>
                  </article>
                )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
