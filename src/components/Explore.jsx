import React from "react";

import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
// import productsData from '../data/productsData';
import productData from "../data/productsData";
// import { IoIosArrowDropright } from 'react-icons/io';
// import { Link } from 'react-router-dom';

const Explore = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // console.log(productData.map((productData)=>{
  //   return productData.title
  // }));
  return (
    <section className="explore">
      <h2 className="explore-title">
        Explore Our Range of <br /> Cutting-Edge LED
      </h2>
      <div className="row">
        {productData.map((item, index) => (
          <article className="col-md-12 my-5" key={index}>
            <div className="row">
              {index % 2 === 0 ? (
                // Layout 1 (e.g., Image first)
                <>
                  <figure className="col-md-6 mb-5">
                    <div className="explore-image-container ">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width="100%"
                        height="100%"
                        className="explore-image"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                  <div className="col-md-6 mb-5">
                    <div
                      className={`d-flex gap-2 flex-column justify-content-center ${
                        item.textAlign === "center" ? "align-items-center" : ""
                      } w-100 h-100`}
                    >
                      <h2
                        className={`explore-subtitle ${
                          item.textAlign === "center" ? "text-center" : ""
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`explore-description ${
                          item.textAlign === "center" ? "text-center" : ""
                        }`}
                      >
                        {item.intro}
                      </p>
                      <div className="d-flex flex-row flex-wrap"></div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <div className={`explore-description`}>
                          <b>Want to know how to choose your LED screen?</b>
                        </div>
                        <Link
                          to={item.link}
                          onClick={handleScrollToTop}
                          className="explore-button-two d-flex flex-wrap text-decoration-none"
                          aria-label={`Learn more about ${item.title}`}
                        >
                          Learn more <IoIosArrowDropright size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Layout 2 (e.g., Text first)
                <>
                  <div className="col-md-6 mb-5">
                    <div
                      className={`d-flex gap-2 flex-column justify-content-center ${
                        item.textAlign === "center" ? "align-items-center" : ""
                      } w-100 h-100`}
                    >
                      <h2
                        className={`explore-subtitle ${
                          item.textAlign === "center" ? "text-center" : ""
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`explore-description ${
                          item.textAlign === "center" ? "text-center" : ""
                        }`}
                      >
                        {item.intro}
                      </p>
                      <div className="d-flex flex-row flex-wrap"></div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <div className={`explore-description m-0`}>
                          <b>Want to know how to choose your LED screen?</b>
                        </div>
                        <Link
                          to={item.link}
                          onClick={handleScrollToTop}
                          className="explore-button-two d-flex flex-wrap text-decoration-none"
                          aria-label={`Learn more about ${item.title}`}
                        >
                          Learn more <IoIosArrowDropright size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <figure className="col-md-6 mb-5">
                    <div className="explore-image-container">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width="100%"
                        height="100%"
                        className="explore-image"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
