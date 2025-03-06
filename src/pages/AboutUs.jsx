import React from 'react';
import innovateDisplayImage from '../assets/InnovateDisplayImage.png';
import IlliminationImage from '../assets/IlliminationImage.png';

import ClientLogo1 from '../assets/ClientLogoOne.png';
import ClientLogo2 from '../assets/ClientLogoTwo.png';
import ClientLogo3 from '../assets/ClientLogoThree.png';
import ClientLogo4 from '../assets/ClientLogoFour.png';
import ClientLogo5 from '../assets/ClientLogoFive.png';
import ClientLogo6 from '../assets/ClientLogoSix.png';
import ClientLogo7 from '../assets/ClientLogoSeven.png';
import ClientLogo8 from '../assets/ClientLogoEight.png';
import ClientLogo9 from '../assets/ClientLogoNine.png';
import { Helmet } from 'react-helmet';
import logo from '../assets/px-logo-web.png'
import { Link } from 'react-router-dom';

// import { FiArrowRightCircle } from 'react-icons/fi';

const AboutUs = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us | Innovative LED Display Solutions",
    "description": "Discover our mission, vision, and core values as we redefine visual storytelling with cutting-edge LED display solutions worldwide.",
    "url": "https://www.pixelworld.ae/aboutus",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pixel World",
      "url": "https://www.pixelworld.ae",
      "logo": { logo }, // Replace with your actual logo URL
      "description": "Pixel World is a leader in innovative LED display solutions, transforming visual storytelling across the globe.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971585321473", // Replace with your contact number
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Arabic"]
      },
      "sameAs": [
        "https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr",
        "https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y",
        // "https://www.linkedin.com/company/pixelworld",
        "https://medium.com/@pixelworldfzc",
        "https://www.blogger.com/u/2/blog/posts/4721417252822204922"
      ]
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };
  return (
    <>
      <Helmet>
        <title>LED Screen Dubai | Outdoor LED Screen | Digital Screen | PixelWorld</title>
        <meta name="description" content="PixelWorld offers premium LED screen solutions in Dubai, including outdoor LED screens and digital screens. Call now for the best LED screen supplier in Dubai!" />
        <meta name="keywords" content="led screen dubai, outdoor led screen, led screen supplier, digital screen" />
        <meta name="author" content="Pixel World" />
        <link rel="canonical" href="https://www.pixelworld.ae/aboutus" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <section className='innovateDisplay' id="aboutus">
        <div className='d-flex justify-content-center'>
          <img src={innovateDisplayImage} alt='Innovative LED Display Solutions' className='innovateDisplay-image' height="100%" width="100%" />
        </div>
        <div className='mt-5'>
          <h1 className='innovateDisplay-title'>Where you can find the best quality pixels at affordable price</h1>
          <p className='innovateDisplay-description'>
            Pixelworld is a trusted LED screen supplier in Dubai, offering top-quality display solutions across the UAE. We specialize in customizable, durable, and high-performance Led screens and Led displays designed to meet your specific needs. As one of the leading LED screen companies in the UAE, Pixelworld has global expertise in manufacturing and installing indoor and outdoor LED screens, as well as rental and staging displays. Our creative and reliable solutions are perfect for projects of any size. With several awards for innovative visual projects, Pixelworld is the name you can count on to enhance your space with impressive digital signage and video walls.
          </p>


          <div className='mb-5'>

            <h2 className='innovateDisplay-section-title'>Why Choose PixelWorld?</h2>
            <p className='innovateDisplay-section-description'>
              <br /><b>High-Quality LED Screens:</b> PixelWorld offers top-quality indoor and outdoor LED screens that are built to last and show vibrant, clear visuals.
              <br /><br /><b>Custom Solutions:</b> We provide LED displays that are customized to fit your needs, whether it's for a small event or a large project.
              <br /><br /><b>Expert Installation:</b> Our experienced team ensures your LED screens are installed professionally for a smooth setup.
              <br /><br /><b>Innovative Designs:</b> PixelWorld is known for its creative, award-winning designs in digital signage and video walls.
              <br /><br /><b>Durable and Reliable:</b> Our LED screens are made to perform well in any environment, providing consistent, high-quality visuals indoors or outdoors.
              <br /><br /><b>Global Expertise:</b> As a leading LED supplier in the UAE, PixelWorld brings global expertise to deliver the best solutions for all types of projects.
              <br /><br /><b>	Wide Range of Products:</b> Whether you need rental screens for an event or permanent installations, PixelWorld has a wide range of LED products to choose from.
              <br /><br /><b>Great Customer Support:</b> Our support team is always ready to help, ensuring your project runs smoothly before, during, and after installation.

            </p>
            <h5 className='innovateDisplay-section-title text-center'>Want to place your order with us? <Link to="/contact" onClick={handleScrollToTop} >Contact Us</Link> </h5>
          </div>
          <div className='mb-5'>

            <h2 className='innovateDisplay-section-title'>Our Area of Expertise</h2>
            <p className='innovateDisplay-section-description'>
              <br /><b>Versatile Indoor LED Screens:</b> PixelWorld offers energy-efficient ECO Series displays for retail stores, offices, and public spaces, along with flexible modules and interactive LEDs for creative environments like meeting rooms, classrooms, and lobbies. Our LED banners and transparent LEDs provide sleek, modern designs for storefronts and promotions.
              <br /><br /><b>Durable Outdoor LED Displays:</b> Our outdoor LED screens are built to withstand all weather conditions, offering high brightness and clarity. Perfect for advertising displays on highways, street signage, and large-scale installations like outdoor LED banners and curtain LEDs for events.
              <br /><br /><b>Tailored Business Solutions:</b> We provide specialized LED screen solutions for retail shops, restaurants, and educational institutions. From dynamic signage to high-resolution meeting room displays, PixelWorld enhances business environments with impactful visuals.
              <br /><br /><b>Event & Rental LED Products:</b> For temporary setups, our rental LED screens offer portable and quick-install options. Perfect for exhibitions, concerts, and events, our portable outdoor cabinets, transparent LEDs, and curtain LEDs create immersive experiences.
              <br /><br />Choose PixelWorld for customizable, high-performance indoor and outdoor LED displays that meet your specific needs and deliver exceptional visual experiences across the UAE.
            </p>
            {/* <h5 className='innovateDisplay-section-title text-center'>Want to place your order with us? <Link onClick={handleScrollToBottom} >Contact Us</Link> </h5> */}
          </div>

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



      <section className='illumination-about'>

        <div className='my-5'>
          <h2 className='illimination-about-subtitle'>Trusted By Industry Leaders</h2>

          <div className='d-flex flex-wrap justify-content-center mt-5 align-items-center'>
            {[ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6, ClientLogo7, ClientLogo8, ClientLogo9].map(
              (logo, index) => (
                <div key={index} className='logo-container m-4'>
                  <img src={logo} alt={`Client Logo ${index + 1}`} width="100%" height="100%" />
                </div>
              )
            )}
          </div>
        </div>

        <div className='row my-5 p-3'>
          <div className='col-md-9 my-5'>
            <h2 className='illumination-about-title text-start'>See Our Displays in Action</h2>
            <p className='illumination-about-description text-start'>
              Get top-quality LED screens, outdoor displays, and digital signage from the leading LED screen provider in Dubai! Contact us today!
            </p>
          </div>
          <div className='col-md-3 my-5'>
            <div className='illimination-count-card'>
              <h2 className='illimination-count'>7K+</h2>
              <p className='illumination-count-text'>Happy Clients and Businesses</p>
            </div>
          </div>
        </div>
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
