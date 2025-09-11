import React from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/px-logo-web.png";
import "./Services.css"

import OutdoorAdvertising1 from "../assets/ServiceItems/OutdoorAdvertising1.jpg";
import OutdoorAdvertising2 from "../assets/ServiceItems/OutdoorAdvertising2.jpg";
import OutdoorAdvertising3 from "../assets/ServiceItems/OutdoorAdvertising3.jpg";
import OutdoorAdvertising4 from "../assets/ServiceItems/OutdoorAdvertising4.jpg";
import OutdoorAdvertising5 from "../assets/ServiceItems/OutdoorAdvertising5.jpg";
import OutdoorAdvertising6 from "../assets/ServiceItems/OutdoorAdvertising6.jpg";
import OutdoorAdvertising7 from "../assets/ServiceItems/OutdoorAdvertising7.jpg";
import OutdoorAdvertising8 from "../assets/ServiceItems/OutdoorAdvertising8.jpg";
import OutdoorAdvertising9 from "../assets/ServiceItems/OutdoorAdvertising9.jpg";
import SpecificADFormats1 from "../assets/ServiceItems/SpecificADFormats1.jpg";
import SpecificADFormats2 from "../assets/ServiceItems/SpecificADFormats2.jpg";
import SpecificADFormats3 from "../assets/ServiceItems/SpecificADFormats3.jpg";
import SpecificADFormats4 from "../assets/ServiceItems/SpecificADFormats4.jpg";
import SpecificADFormats5 from "../assets/ServiceItems/SpecificADFormats5.jpg";
import SpecificADFormats6 from "../assets/ServiceItems/SpecificADFormats6.jpg";
import SpecificADFormats7 from "../assets/ServiceItems/SpecificADFormats7.jpg";
import SpecificADFormats8 from "../assets/ServiceItems/SpecificADFormats8.jpg";
import SpecificADFormats9 from "../assets/ServiceItems/SpecificADFormats9.jpg";
import MallAndLocationBasedAdvertising1 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (1).jpg";
import MallAndLocationBasedAdvertising2 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (2).jpg";
import MallAndLocationBasedAdvertising3 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (3).jpg";
import MallAndLocationBasedAdvertising4 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (4).jpg";
import MallAndLocationBasedAdvertising5 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (5).jpg";
import MallAndLocationBasedAdvertising6 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (6).jpg";
import MallAndLocationBasedAdvertising7 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (7).jpg";
import MallAndLocationBasedAdvertising8 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (8).jpg";
import MallAndLocationBasedAdvertising9 from "../assets/ServiceItems/MallAndLocatioBasedAdvertising (9).jpg";
import OccasionReady from "../components/OccasionReady";
import { OurProjectLeft, OurProjectRight } from "../data/ProjectsData";
import { Link } from "react-router-dom";
import Gallery from "./GalleryPreview";

const servicesData = [
  {
    title: "Outdoor Advertising",
    items: [
      { text: "Outdoor Advertising Dubai", image: OutdoorAdvertising1 },
      { text: "Outdoor Advertising Abu Dhabi", image: OutdoorAdvertising2 },
      {
        text: "Outdoor Advertising Ras Al Khaimah",
        image: OutdoorAdvertising3,
      },
      { text: "Outdoor Advertising Fujairah", image: OutdoorAdvertising4 },
      { text: "Outdoor Advertising Sharjah", image: OutdoorAdvertising5 },
      { text: "Outdoor Advertising Ajman", image: OutdoorAdvertising6 },
      { text: "Outdoor Advertising Umm Al Quwain", image: OutdoorAdvertising7 },
      { text: "Outdoor Advertising Al Ain", image: OutdoorAdvertising8 },
      { text: "Outdoor Advertising Saudi Arabia", image: OutdoorAdvertising9 },
    ],
  },
  {
    title: "Specific Ad Formats",
    items: [
      { text: "Billboard Advertising", image: SpecificADFormats1 },
      { text: "Bridge Advertising", image: SpecificADFormats2 },
      { text: "Lampposts Advertising", image: SpecificADFormats3 },
      { text: "Hoardings Advertising", image: SpecificADFormats4 },
      { text: "Taxi Advertising", image: SpecificADFormats5 },
      { text: "Megacoms Advertising", image: SpecificADFormats6 },
      { text: "Building Wraps", image: SpecificADFormats7 },
      { text: "Mupi Advertising", image: SpecificADFormats8 },
      { text: "Unipole Advertising", image: SpecificADFormats9 },
    ],
  },
  {
    title: "Mall & Location-Based Advertising",
    items: [
      {
        text: "Dubai Mall Advertising",
        image: MallAndLocationBasedAdvertising1,
      },
      {
        text: "Mall Of Emirates Advertising",
        image: MallAndLocationBasedAdvertising2,
      },
      {
        text: "Dubai Marina Mall Advertising",
        image: MallAndLocationBasedAdvertising3,
      },
      {
        text: "Sharjah City Centre Advertising",
        image: MallAndLocationBasedAdvertising4,
      },
      {
        text: "Ajman City Centre Advertising",
        image: MallAndLocationBasedAdvertising5,
      },
      {
        text: "Ibn Battuta Mall Advertising",
        image: MallAndLocationBasedAdvertising6,
      },
      {
        text: "City Walk Advertising",
        image: MallAndLocationBasedAdvertising7,
      },
      {
        text: "Mall Of Al Ain Advertising",
        image: MallAndLocationBasedAdvertising8,
      },
      {
        text: "Fujairah City Centre Advertising",
        image: MallAndLocationBasedAdvertising9,
      },
    ],
  },
];

const Services = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tailored Advertising Solutions | LED Displays for Every Occasion",
    description:
      "Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions. Tailored for all types of events and campaigns.",
    provider: {
      "@type": "Organization",
      name: "Pixel World",
      url: "https://www.pixelworld.ae",
      logo: {
        "@type": "ImageObject",
        url: { logo }, // Replace with your logo URL
      },
    },
    serviceType: "LED Display Advertising Solutions",
    areaServed: "Dubai, UAE, GCC", // Customize according to your target areas
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      url: "https://www.pixelworld.ae/services",
      price: "Price upon request", // Adjust as needed
    },
    url: "https://www.pixelworld.ae/services",
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <div className="services" id="services">
      <Helmet>
        <title>
          Pixel World LED Screens & Digital Kiosks – LED Lighting & Supplies
        </title>
        <meta
          name="description"
          content="Pixel World offers LED screens, digital kiosks, LED lighting & supplies in Dubai. Call now for premium products to elevate your space!"
        />
        <meta
          name="keywords"
          content="outdoor led display screen, indoor led screen, led screen panel, led screen dubai"
        />
        <meta name="author" content="Pixel World" />
        <meta
          property="og:title"
          content="Tailored Advertising Solutions | LED Displays for Every Occasion"
        />
        <meta
          property="og:description"
          content="Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions. Tailored for all types of events and campaigns."
        />
        <meta property="og:image" content={OutdoorAdvertising1} />
        <meta property="og:type" content="projects" />
        <meta
          property="og:url"
          content={`https://www.pixelworld.ae/projects`}
        />
        <meta
          name="twitter:title"
          content="Tailored Advertising Solutions | LED Displays for Every Occasion"
        />
        <meta
          name="twitter:description"
          content="Explore innovative LED displays for outdoor, specific ad formats, and mall/location-based advertising solutions."
        />
        <meta name="twitter:image" content={OutdoorAdvertising1} />
        <link rel="canonical" href="https://www.pixelworld.ae/projects" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <header className="services-hero">
        <h1 className="services-title ">
          PixelWorld – No.1 LED Screen Supplier in Dubai
        </h1>
      </header>

      <p className="services-description text-start text-justify ">
        At PixelWorld, we deliver cutting-edge LED display solutions across
        Dubai, Abu Dhabi, and Sharjah. From indoor and outdoor video walls to
        customized LED screens, interactive kiosks, and digital signage, we
        create stunning visuals for every space and event.
        <br />
        <br />
        Our portfolio spans digital advertising displays, event staging,
        rentals, LED signage for hotels, restaurants, offices, galleries,
        exhibitions, and more. With reliable technology, tailored designs, and
        ongoing maintenance, PixelWorld is your trusted partner for impactful
        visual experiences.
        <br />
        <br />
        {/* We have successfully delivered numerous projects across Dubai, Abu
        Dhabi, and Sharjah, and our clients rely on us for innovative, reliable,
        and visually striking solutions. We also pride ourselves on providing
        top-notch maintenance services, ensuring that each product continues to
        perform at its best over time. At PixelWorld, we’re not just a LED
        screen supplier – we’re a partner in creating unforgettable experiences.
        <br />
        <br /> */}
        Explore our recent projects and see why PixelWorld is the best choice
        for your LED screen needs.
      </p>

      {/* <section className='services-intro'>
        <h2 className='services-bg-title'>From Concept to Completion</h2>
      </section> */}

      {/* <section className='services-list'>
        {servicesData.map((service, index) => (
          <div key={index} className='service-category'>
            <h3 className='service-category-title'>{service.title}</h3>
            <div className='row'>
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className='col-md-4'>
                  <div className='service-item'>
                    <div className='service-image-container'>
                      <img
                        src={item.image}
                        alt={item.text}
                        className='service-image'
                        loading='lazy'
                        height="100%" 
                        width="100%"
                      />
                    </div>
                    <p className='service-text'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section> */}

      {/* <div className="row">
        <h2 className="services-title my-3 content-t-w">Our Projects</h2>
        {OurProjectLeft.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4">
            <div key={index} className="our-projects-image-container w-100">
              <img
                src={project.image}
                alt="Image one"
                width="100%"
                height="100%"
                className="our-projects-image"
              />
              <div className="hero-image-overlay "></div>
              <div className="our-projects-content">
                <h6>{project.place}</h6>
                <p className="m-0">{project.model}</p>
              </div>
            </div>
          </div>
        ))}
        {OurProjectRight.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4">
            <div key={index} className="our-projects-image-container w-100">
              <img
                src={project.image}
                alt="Image one"
                width="100%"
                height="100%"
                className="our-projects-image"
              />
              <div className="hero-image-overlay "></div>
              <div className="our-projects-content">
                <h6>{project.place}</h6>
                <p className="m-0">{project.model}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <Gallery/>
      
      <section className="my-5">
        <h2 className="services-subtitle text-center content-t-w">
          Why Choose Us?
        </h2>
        <p className="services-description content-t2-w">
          We provide tailored LED display solutions for every occasion.
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="innovateDisplay-card rounded">
              <h3 className="innovateDisplay-card-title content-t2-w">
                Experience Across Industries
              </h3>
              <p className="innovateDisplay-card-description content-d-w">
                Expertise in diverse projects, from corporate events to
                campaigns.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="innovateDisplay-card rounded">
              <h3 className="innovateDisplay-card-title content-t2-w">
                Customized Solutions
              </h3>
              <p className="innovateDisplay-card-description content-d-w">
                Tailored services to align with your unique needs and goals.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="innovateDisplay-card rounded">
              <h3 className="innovateDisplay-card-title content-t2-w">
                Global Reach
              </h3>
              <p className="innovateDisplay-card-description content-d-w">
                Bringing visibility to brands across the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h3 className="services-title m-0">Why wait?</h3>
      <p className="services-description ">
        {" "}
        <br />
        Let’s showcase your brand alongside our esteemed clients and
        <br /> make your success part of our achievements!
      </p>
    </div>
  );
};

export default Services;
