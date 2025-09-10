import React, { useRef } from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productData from "../data/productsData";

const Explore = () => {
  const scrollRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="explore">
      <h2 className="explore-title">
        Explore Our Range of <br /> Cutting-Edge LED
      </h2>

      {/* Desktop View */}
      <div className="explore-list desktop-view">
        {productData.map((item, index) => (
          <article
            className={`explore-item ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <figure className="explore-image-container">
              <img
                src={item.image}
                alt={item.alt}
                className="explore-image"
                loading="lazy"
              />
            </figure>

            <div className="explore-content">
              <h2 className="explore-subtitle">{item.title}</h2>
              <p className="explore-description">{item.intro}</p>
              <div className="explore-footer">
                <p className="explore-description m-0">
                  <b>Want to know how to choose your LED screen?</b>
                </p>
                <Link
                  to={item.link}
                  onClick={handleScrollToTop}
                  className="explore-button"
                >
                  Learn more <IoIosArrowDropright size={22} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        <div className="explore-scroll" ref={scrollRef}>
          {productData.map((item, index) => (
            <div className="explore-card" key={index}>
              <img
                src={item.image}
                alt={item.alt}
                className="explore-image"
                loading="lazy"
              />
              <h3 className="explore-subtitle">{item.title}</h3>
              <p className="explore-description two-lines">{item.intro}</p>
              <Link
                to={item.link}
                onClick={handleScrollToTop}
                className="explore-button"
              >
                Learn more <IoIosArrowDropright size={22} />
              </Link>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="scroll-controls">
          <button className="scroll-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
