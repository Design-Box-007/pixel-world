import React, { useState } from "react";
import innovateDisplayImage from "../assets/InnovateDisplayImage.png";
import IlliminationImage from "../assets/IlliminationImage.png";
import AboutUsHome from "../assets/AboutUsHome.jpg";
import ClientLogo1 from "../assets/ClientLogoOne.png";
import ClientLogo2 from "../assets/ClientLogoTwo.png";
import ClientLogo3 from "../assets/ClientLogoThree.png";
import ClientLogo4 from "../assets/ClientLogoFour.png";
import ClientLogo5 from "../assets/ClientLogoFive.png";
import ClientLogo6 from "../assets/ClientLogoSix.png";
import ClientLogo7 from "../assets/ClientLogoSeven.png";
import ClientLogo8 from "../assets/ClientLogoEight.png";
import ClientLogo9 from "../assets/ClientLogoNine.png";
import { Helmet } from "react-helmet";
import logo from "../assets/px-logo-web.png";
import { Link } from "react-router-dom";

// import { FiArrowRightCircle } from 'react-icons/fi';

const AboutUs = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us | Innovative LED Display Solutions",
    description:
      "Discover our mission, vision, and core values as we redefine visual storytelling with cutting-edge LED display solutions worldwide.",
    url: "https://www.pixelworld.ae/aboutus",
    mainEntity: {
      "@type": "Organization",
      name: "Pixel World",
      url: "https://www.pixelworld.ae",
      logo: { logo }, // Replace with your actual logo URL
      description:
        "Pixel World is a leader in innovative LED display solutions, transforming visual storytelling across the globe.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971585321473", // Replace with your contact number
        contactType: "Customer Service",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Arabic"],
      },
      sameAs: [
        "https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr",
        "https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y",
        // "https://www.linkedin.com/company/pixelworld",
        "https://medium.com/@pixelworldfzc",
        "https://www.blogger.com/u/2/blog/posts/4721417252822204922",
      ],
    },
  };
  const [showDetails, setShowDetails] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <>
      <Helmet>
        <title>
          LED Screen Dubai | Outdoor LED Screen | Digital Screen | PixelWorld
        </title>
        <meta
          name="description"
          content="PixelWorld offers premium LED screen solutions in Dubai, including outdoor LED screens and digital screens. Call now for the best LED screen supplier in Dubai!"
        />
        <meta
          name="keywords"
          content="led screen dubai, outdoor led screen, led screen supplier, digital screen"
        />
        <meta name="author" content="Pixel World" />
        <link rel="canonical" href="https://www.pixelworld.ae/aboutus" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <section className="innovateDisplay" id="aboutus">
        <div className="d-flex justify-content-center">
          <img
            src={innovateDisplayImage}
            alt="Innovative LED Display Solutions"
            className="innovateDisplay-image"
            height="100%"
            width="100%"
          />
        </div>
        <div className="mt-5">
          <div className="aboutus-intro">
            <h1 className="innovateDisplay-title">
              Where you can find the best quality pixels at affordable price
            </h1>
            <div className="innovateDisplay-description">
              <div>
                <h3>Vision</h3>
                <p>
                  To become the leading provider of innovative LED display and
                  digital kiosk solutions in the Gulf region, empowering
                  businesses with high-impact visual technologies that enhance
                  engagement, communication, and brand presence.
                </p>
              </div>
              <div>
                <h3>Misson</h3>
                <p>
                  At PixelWorld, our mission is to deliver high-quality,
                  energy-efficient indoor and outdoor LED displays and
                  customised digital kiosks that meet the evolving needs of
                  modern businesses. Through cutting-edge technology,
                  exceptional service, and a strong presence across the UAE,
                  Saudi Arabia, Oman, Kuwait, Qatar, and Bahrain, we aim to
                  provide reliable, tailored solutions that elevate user
                  experiences and drive business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="home-about">
            <div className="home-about-right">
              <img src={AboutUsHome} alt="aboutUs" />
            </div>

            <div className="home-about-left">
              <h1>Why Choose PixelWorld?</h1>

              {/* First expandable details */}
              <div>
                <p>
                  At PixelWorld, we pride ourselves on delivering not just
                  top-quality LED displays and customised digital kiosks, but
                  also exceptional customer support and reliable maintenance
                  services. With a strong business presence in Dubai and a
                  well-established network across the Gulf region—including the
                  UAE, Saudi Arabia, Oman, Kuwait, Qatar, Bahrain, and beyond—we
                  ensure prompt and efficient service wherever you are.
                </p>
                <p>
                  Our commitment to excellence starts with providing premium,
                  durable, and energy-efficient products that guarantee vibrant
                  visuals and long-lasting performance in any environment.
                  Whether it’s indoor or outdoor LED screens, rental solutions,
                  or interactive kiosks, we source only from trusted
                  manufacturers and conduct rigorous quality checks to maintain
                  industry-leading standards.
                </p>
                <div
                  className={`details-container ${showDetails ? "show" : ""}`}
                >
                  <p>
                    Beyond delivering cutting-edge technology, PixelWorld
                    supports our customers through every stage— from
                    consultation and professional installation to ongoing
                    maintenance and technical assistance. Our dedicated support
                    team ensures your systems run smoothly, minimizing downtime
                    and maximizing your investment’s value.
                  </p>
                  <p>
                    Choosing PixelWorld means partnering with a company that
                    understands the diverse needs of businesses across retail,
                    hospitality, education, corporate sectors, and more. We
                    tailor our solutions to fit your unique requirements while
                    providing scalable, future-ready technology backed by
                    dependable service.
                  </p>
                  <p>
                    Trust PixelWorld to be your go-to provider for customised
                    LED and kiosk solutions across the Gulf, offering
                    unparalleled quality, expert support, and a seamless
                    customer experience.
                  </p>
                </div>
              </div>
               <div className="home-about-button">
              <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide" : "Learn More"}
              </button>
              </div>
            </div>
          </div>
          {/* <div className="mb-5">
            <h2 className="innovateDisplay-section-title">
              Our Area of Expertise
            </h2>
            <p className="innovateDisplay-section-description">
              <br />
              <b>Versatile Indoor LED Screens:</b> PixelWorld offers
              energy-efficient ECO Series displays for retail stores, offices,
              and public spaces, along with flexible modules and interactive
              LEDs for creative environments like meeting rooms, classrooms, and
              lobbies. Our LED banners and transparent LEDs provide sleek,
              modern designs for storefronts and promotions.
              <br />
              <br />
              <b>Durable Outdoor LED Displays:</b> Our outdoor LED screens are
              built to withstand all weather conditions, offering high
              brightness and clarity. Perfect for advertising displays on
              highways, street signage, and large-scale installations like
              outdoor LED banners and curtain LEDs for events.
              <br />
              <br />
              <b>Tailored Business Solutions:</b> We provide specialized LED
              screen solutions for retail shops, restaurants, and educational
              institutions. From dynamic signage to high-resolution meeting room
              displays, PixelWorld enhances business environments with impactful
              visuals.
              <br />
              <br />
              <b>Event & Rental LED Products:</b> For temporary setups, our
              rental LED screens offer portable and quick-install options.
              Perfect for exhibitions, concerts, and events, our portable
              outdoor cabinets, transparent LEDs, and curtain LEDs create
              immersive experiences.
              <br />
              <br />
              Choose PixelWorld for customizable, high-performance indoor and
              outdoor LED displays that meet your specific needs and deliver
              exceptional visual experiences across the UAE.
            </p>
            <h5 className='innovateDisplay-section-title text-center'>Want to place your order with us? <Link onClick={handleScrollToBottom} >Contact Us</Link> </h5>
          </div> */}

          {/* <div className='row'>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Our Mission</h2>
                <p className='innovateDisplay-card-description'>
                  To provide innovative LED solutions that captivate audiences and transform spaces worldwide.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>500+</h2>
                <p className='illumination-count-text'>Projects Completed</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Core Values</h2>
                <p className='innovateDisplay-card-description'>
                  Innovation, Quality, Sustainability, and Client Focus.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>7K+</h2>
                <p className='illumination-count-text'>Happy Clients and Businesses</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='innovateDisplay-card rounded'>
                <h2 className='innovateDisplay-card-title'>Our Vision</h2>
                <p className='innovateDisplay-card-description'>
                  Empowering brands to communicate with brilliance and clarity.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='illimination-count-card'>
                <h2 className='illimination-count'>70+</h2>
                <p className='illumination-count-text'>Cities Covered Worldwide</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="illumination-about">
        <div className="my-5">
          <h2 className="illimination-about-subtitle">
            Trusted By Industry Leaders
          </h2>

          <div className="d-flex flex-wrap justify-content-center mt-5 align-items-center">
            {[
              ClientLogo1,
              ClientLogo2,
              ClientLogo3,
              ClientLogo4,
              ClientLogo5,
              ClientLogo6,
              ClientLogo7,
              ClientLogo8,
              ClientLogo9,
            ].map((logo, index) => (
              <div key={index} className="logo-container m-4">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="row my-5 p-3">
          <div className="col-md-9 my-5">
            <h2 className="illumination-about-title text-start">
              See Our Displays in Action
            </h2>
            <p className="illumination-about-description text-start">
              Get top-quality LED screens, outdoor displays, and digital signage
              from the leading LED screen provider in Dubai! Contact us today!
            </p>
          </div>
          <div className="col-md-3 my-5">
            <div className="illimination-count-card">
              <h2 className="illimination-count">7K+</h2>
              <p className="illumination-count-text">
                Happy Clients and Businesses
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* <section className='about-partner'>
        <h2 className='about-title'>Partner with Us</h2>
        <div className='about-discover'>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <img src={logoWhite} alt='Logo' width="100%" height="100%" />
            </div>
            <div className='col-md-9 mb-3'>
              <div className='about-discover-text'>
                Discover Our Services <FiArrowRightCircle />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
