import React, { useState } from "react";
import { IoAtOutline } from "react-icons/io5";
import InstaIcon from "../assets/InstaIcon.png";
import logoWhite from "../assets/px-logo-web.png";
import XIcon from "../assets/XIcon.png";
import FacebookIcon from "../assets/FacebookIcon.png";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    message: "",
  });

  const navlinks = [
    {
      navTitle: "Home",
      navLink: "/",
    },
    {
      navTitle: "About Us",
      navLink: "/aboutus",
    },
    {
      navTitle: "Industries",
      navLink: "/industries",
    },
    {
      navTitle: "Projects",
      navLink: "/projects",
    },
    {
      navTitle: "Blog",
      navLink: "/blog",
    },
  ];

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          mobile: formData.mobile,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmissionStatus("success");
          setFormData({ fullName: "", mobile: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmissionStatus("error");
        }
      );
  };

  return (
    <div className="footer">
      {/* <div className="row">
        <h6 className='text-center text-white mb-4'>Dubai's leading Led signage, Indoor and Outdoor LED screens, and Customised LED screen supplier.</h6>
        <div className="col-md-5 col-lg-8">
          <h2 className="footer-title">Let’s Talk</h2>
        </div>

        <div className="col-md-7 col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="d-md-flex align-items-center row">
                  <div className="col-md-8">
                    <div className="footer-cover">
                      sales@pixelworld.ae
                    </div>
                  </div>
                  <div className="col-md-4">

                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="footer-input"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="footer-input"
                  required
                />
              </div>

              <div className="col-md-12 mb-2">
                <div className="footer-cover">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="footer-input-two"
                    placeholder="Let us know about your magic"
                    required
                  ></textarea>
                  <button type="submit" className="footer-btn">
                    Reach Out
                  </button>
                </div>
              </div>
            </div>
          </form>

          {submissionStatus === 'success' && (
            <div className="text-success mt-2 bg-light rounded p-1">
              Form submitted successfully!
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="text-danger mt-2 bg-light rounded p-1">
              Failed to submit the form. Please try again later.
            </div>
          )}
        </div>
      </div> */}

      {/* <div className="footer-description">
        Let’s craft a unique experience together. Get in touch today to start
        your journey with Us
      </div> */}
      <div className="row">
        <div className="col-md-6">
          <div className="footer-map mb-4">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7961265096114!2d55.451173375384435!3d25.277442777659356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzM4LjgiTiA1NcKwMjcnMTMuNSJF!5e0!3m2!1sen!2sin!4v1734017661072!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-md-3">
          <h5 className="footer-navlinks-title">Links</h5>
          <div className="navlinks">
            {navlinks.map((nav, index) => (
              <Link
                to={nav.navLink}
                key={index}
                className="text-decoration-none footer-navlink"
              >
                {nav.navTitle}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex gap-3 my-3 flex-wrap">
            <a
              href="https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y"
              target="_blank"
            >
              {" "}
              <BsInstagram size={30} color="#E1306C" />
            </a>
            <a href="https://x.com/Pixelworldfzc" target="_blank">
              <BsTwitterX size={30} color="black" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573776366139"
              target="_blank"
            >
              <FaFacebook size={30} />
            </a>
          </div>
          <h6 className="footer-address">
            408, Appartment M02, Persia cluster, International
            city, Dubai - UAE.
          </h6>
          <h6 className="footer-email">
            <a href="mailto:sales@pixelworld.ae">Email Us</a>
          </h6>

          <h6 className="footer-phone">
            {/* <IoAtOutline size={24} /> */}
            +971 58 532 1473
          </h6>
          <h6 className="footer-phone">
            {/* <IoAtOutline size={24} /> */}
            +971 55 513 1473
          </h6>
        </div>
      </div>

      <div className="d-sm-flex justify-content-between align-items-center">
        <div className="footer-logo">
          <img src={logoWhite} alt="logoWhite" width={200} height={60} />
          {/* <span>Pixel World</span> */}
        </div>
        <div>
          <a
            href="https://www.pixelpanda.ae/"
            target="_blank"
            className="footer-text"
          >
            This website is Designed and Developed by The Pixel Panda Technology
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
