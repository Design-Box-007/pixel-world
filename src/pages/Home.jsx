import { useState } from "react";
import heroImage from "../assets/heroImage.jpg";
import innovateDisplayImage from "../assets/InnovateDisplayImage.png";

import logo from "../assets/px-logo-web.png";
import { Helmet } from "react-helmet";

import Marquee from "react-fast-marquee";
// import ImageOne from '../assets/ImageOne.jpg'
// import ImageTwo from '../assets/ImageTwo.png'
// import ImageThree from '../assets/ImageThree.jpg'
// import ImageFour from '../assets/ImageFour.png'
// import ImageFive from '../assets/ImageFive.jpg'
import AboutUsHome from "../assets/AboutUsHome.jpg";

import WannaWorkImage from "../assets/WannaWorkImage.svg";

import { IoMdArrowForward } from "react-icons/io";
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import FAQ from "../components/FAQ";
import Explore from "../components/Explore";
import { FaWhatsapp } from "react-icons/fa";
import exploreData from "../data/exploreData";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { OurProjectLeft, OurProjectRight } from "../data/ProjectsData";
import HeroVideo from "../assets/hero-clip.mp4";
import ContactUs from "./ContactUs";
import { BiArrowFromLeft, BiArrowToLeft, BiSolidArrowToRight } from "react-icons/bi";
import { BsArrow90DegRight, BsArrowBarRight, BsArrowDownRightCircleFill } from "react-icons/bs";

// const cardData = [
//   {
//     // title: 'Client-Centric',
//     description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier brings award-winning LED solutions to the LED industry by delivering high-quality, customizable, and durable products. As one of the leading companies in the UAE with international recognition, we specialize in the production and installation of indoor and outdoor LED screens and the supply of rental and staging products.
// <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a solutions-oriented approach, we continuously innovate and develop new products based on our customers' needs, regardless of the project size. Recognized with multiple awards, our one-of-a-kind and imaginative visual projects cater to a wide range of clients, amplifying creativity while ensuring cost-effective and reliable solutions.
// <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br/>
// <br/><strong>Our Expertise</strong><br/><br/>
// At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
// <br/>•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
// <br/>•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
// <br/>•	LED Signage: Digital signage for information, food menus, and shop signage.
// <br/>•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
// <br/>•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
// <br/>•	Transparent LED: Innovative displays for retail and creative environments.
// <br/>•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br/>
// <br/><strong>Services</strong><br/>

// <br/><b>Indoor Solutions</b><br/>
// •	Retail Indoor LED
// <br/>•	LED for Schools
// <br/>•	LED Screens for Meeting Rooms
// <br/>•	Flexible LED
// <br/>•	90 and 360-degree LED Screens
// <br/>•	Entrance Frame LED Screens
// <br/>•	Digital Signage for Information
// <br/>•	Shop Signage LED
// <br/>•	LED for Corporate Offices
// <br/>
// <b>
// Outdoor Solutions</b>
// <br/>•	Outdoor LED Screens for Billboards
// <br/>•	Digital Signage for Food Menus
// <br/>•	Outdoor Mesh LED
// <br/>•	Outdoor Net LED<br/>
// <b>
// Specialty LED Solutions</b><br/>
// •	LED Digital Posters
// <br/>•	3D LED Stands
// <br/>•	Floor LEDs
// <br/>•	Digital Kiosks
// <br/>•	Ceiling LEDs
// <br/>•	Creative Retail LED Screens
// <br/>•	Transparent LEDs for Retail
// <br/>
// <br/>
// Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology.`,
//   },
//   // {
//   //     title: 'Reliability',
//   //     description: 'Ensuring seamless performance and timely execution for every project.',
//   // },
//   // {
//   //     title: 'Quality',
//   //     description: 'Committed to providing top-tier products and exceptional service.',
//   // },
// ];


 const specialties = [
    "Customised LED video walls for exhibitions and events",
    "Affordable indoor LED screens for retail stores and corporate spaces",
    "High-brightness outdoor LED screens for impactful advertising",
    "Interactive LED screens for customer engagement",
    "Customised software for digital kiosks, enabling smart, user-friendly experiences",
    "LED screen rentals for stages, conferences, and temporary setups",
    "LED signage for shop fronts, malls, and commercial venues",
  ];
const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll animation
    });
  };
  const [showDetails, setShowDetails] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixelworld",
    url: "https://www.pixelworld.ae",
    logo: { logo }, // Replace with your logo URL
    description:
      "Discover Pixelworld's innovative LED screen advertising solutions. From indoor and outdoor LED screens to traditional advertising, we bring your brand to life.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971585321473", // Replace with your contact number
      contactType: "Customer Service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr",
      "https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y",
      // "https://www.linkedin.com/company/pixelworld",
      "https://medium.com/@pixelworldfzc",
      "https://www.blogger.com/u/2/blog/posts/4721417252822204922",
    ],
  };

  return (
    <div className="home">
      <Helmet>
        <title>
          LED Screen Suppliers in Dubai | Display Screen | LED Display
        </title>
        <meta
          name="description"
          content="Leading outdoor LED screen supplier in Dubai. High-quality LED screen displays and display screens. Call now for the best LED solutions in Dubai!"
        />
        <meta
          name="keywords"
          content="led screen suppliers in dubai, outdoor led screen supplier in dubai, display screen, led screen display"
        />
        <link rel="canonical" href="https://www.pixelworld.ae" />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="hero-section">
        <div className="hero-image-container">
          {/* <img src={heroImage} alt='heroImage' width="100%" height="100%" className='hero-image' /> */}
          <video src={HeroVideo} autoPlay muted className="hero-image">
            Your browser does not support the video tag.
          </video>

          <div className="hero-image-overlay"></div>
          <div className="hero-content">
            <div className="d-flex align-items-center flex-column">
              {/* <h2 className='hero-title'>Pixel World</h2> */}
              {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
            </div>
            <div className="hero-subcontent">
              {/* <div>
                                <button className='hero-explore-btn'>
                                    Chat with Expert <IoMdArrowForward size={20} />
                                </button>
                            </div> */}

              <h1 className="hero-text">
                No. 1 Dubai LED Screen Company, with indoor and outdoor LED
                screens.
              </h1>
              <div className="d-flex gap-1 justify-content-center flex-wrap">
                <a
                  href="https://wa.me/+971585321473"
                  className="text-decoration-none"
                  target="_blank"
                >
                  <button className="buttonTwo d-flex align-items-center gap-2">
                    <FaWhatsapp size={50} /> +971585321473
                  </button>
                </a>
                <a
                  href="https://wa.me/+971555131473"
                  className="text-decoration-none"
                  target="_blank"
                >
                  <button className="buttonTwo d-flex align-items-center gap-2">
                    <FaWhatsapp size={50} /> +971555131473
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-about">
        <div className="home-about-right">
          <img src={AboutUsHome} alt="aboutUs" />
        </div>

        <div className="home-about-left">
          <Link to="/aboutus">
            <h3>
              About Us <BsArrowDownRightCircleFill/>
            </h3>
          </Link>

          <h1>
            Dubai LED Screen Supplier – Premium LED Display & Digital Kiosk
            Solutions
          </h1>

          {/* First expandable details */}

          <p>
            Looking for high-quality indoor and outdoor LED screens in Dubai?
            Pixelworld is your trusted LED screen supplier in the UAE, offering
            a full range of customised LED display solutions tailored to meet
            your business needs. From LED video walls to interactive screens and
            customised software for digital kiosks, we provide affordable,
            high-performance solutions built for both rental and permanent
            installations. As a leading name in the industry, we deliver
            durable, energy-efficient LED screens for every application —
            whether it’s for retail stores, exhibitions, trade shows, events, or
            outdoor advertising. Our customised LED screens and digital signage
            options are designed to maximize your brand’s visibility while
            staying within your budget.
          </p>

          {/* 🔥 New container you wanted */}

          <div className={`details-container ${showDetails ? "show" : ""}`}>
            <h2>At Pixelworld, we specialize in:</h2>
            <ul>
               {specialties.map((item,index) => (
                <li key={index} className="product-description">{item}</li>
               ))}
            </ul>
            <p>
              Whether you're a local retailer or a global brand, our solutions
              are designed to help you engage your audience, enhance your
              marketing, and stand out in any environment. With award-winning
              LED technology and expert project handling, we’re equipped to
              support everything from small business needs to large-scale
              corporate installations.
            </p>
          </div>
           <div className="home-about-button">
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide" : "Learn More"}
          </button>
          </div>
        </div>
      </div>

      <div className="occasionReady">
        <div className="occasionReady-title">
          From Setup to Support, <br />
          We've Got Your Occasions Covered
        </div>
        <div className="occasionReady-description">
          We deliver cutting-edge LED display solutions with seamless service
          from concept to completion.
        </div>
        <div className="row my-5">
          {/* <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Scalable & Customized Solutions</div>
                                <IoExpand size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Need something unique? We offer custom LED display setups tailored to your event’s theme or special requirements.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>24/7 Technical Support</div>
                                <LuClock3 size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Our specialists are on standby to troubleshoot any issues, minimizing disruptions and maximizing impact
                            </div>
                        </div>
                    </div> */}

          <div className="col-md-4 mb-4">
            <div className="occasionReady-card h-100">
              <div className="d-flex justify-content-between align-items-center text-white">
                <div className="occasionReady-card-title">
                  Customised Kiosk Solutions
                </div>
                {/* <CiDiscount1 size={24} /> */}
              </div>
              <div className="occasionReady-card-description">
                At Pixelworld, we provide customised digital kiosk solutions
                with tailored software to meet the unique needs of industries
                like retail, healthcare, hospitality, government, education, and
                more. Our kiosks solve real-world problems—like long queues,
                manual processes, and poor engagement—by offering features such
                as interactive maps, self-service check-ins, ticketing, virtual
                tours, and loyalty integrations. Powered by modern tech stacks
                like React.js, Node.js, and AWS, and equipped with NFC, QR
                scanners, and payment gateways, our kiosks are built for
                performance, flexibility, and scalability.
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="occasionReady-card h-100">
              <div className="d-flex justify-content-between align-items-center text-white">
                <div className="occasionReady-card-title">
                  Indoor LED Solutions
                </div>
                {/* <VscTools size={24} /> */}
              </div>
              <div className="occasionReady-card-description">
                At Pixelworld, we specialize in high-resolution indoor LED
                displays tailored for a wide range of environments — from retail
                stores, showrooms, and corporate offices to meeting rooms,
                events, exhibitions, and private residences. Our offerings
                include interactive LED screens, seamless video walls, flexible
                and curved LED installations (90° and 360°), and custom digital
                signage designed to elevate branding and enhance customer
                engagement. Whether you're looking for energy-efficient LED
                solutions for long-term use or immersive displays for unique
                spaces, we provide custom indoor LED screens built to perform
                and impress.
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="occasionReady-card h-100">
              <div className="d-flex justify-content-between align-items-center text-white">
                <div className="occasionReady-card-title">
                  Outdoor LED Solutions
                </div>
                {/* <IoPeopleOutline size={24} /> */}
              </div>
              <div className="occasionReady-card-description">
                Pixelworld offers a wide range of high-resolution outdoor LED
                displays engineered for visibility, durability, and impact.
                Ideal for billboards, digital signage, public spaces, stadiums,
                malls, and large-scale events, our weatherproof and
                energy-efficient LED screens deliver outstanding performance in
                all conditions. From interactive outdoor displays to mesh and
                net LED screens, and even solar-powered solutions, we provide
                customizable outdoor LED walls designed for branding,
                advertising, and real-time audience engagement. Whether it's a
                digital menu board for outdoor dining or a massive stadium
                screen, our outdoor LEDs are built to last and captivate.
              </div>
            </div>
          </div>

          {/* <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Maintenance & Upgrades</div>
                                <IoSettingsOutline size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Keep your LED displays in top condition with our regular maintenance and upgrade services. We ensure your equipment is always performing at its best, with the latest technology.
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                        <div className='occasionReady-card'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Event Setup & Configuration</div>
                                <HiOutlineGlobeAlt size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                Our experienced team will handle the full installation and configuration of your LED displays, ensuring optimal Functionalities, and seamless integration with your event environment.
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
      <Explore />

      <div className="our-projects-container">
        {/* <p className='our-project-subtext'>Still Searching ?...</p> */}
        <h2 className="our-project-title">Our Projects and Clients</h2>
        <div className="my-3">
          <Marquee direction="left" pauseOnHover={true} className="mb-3">
            {OurProjectLeft.map((project, index) => (
              <div key={index} className="our-projects-image-container">
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
            ))}
          </Marquee>

          <Marquee direction="right" pauseOnHover={true} className="mb-3">
            {OurProjectRight.map((project, index) => (
              <div key={index} className="our-projects-image-container">
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
            ))}
          </Marquee>
        </div>
      </div>
      <div className="px-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="product-title text-white">Blogs</h2>
          <Link onClick={handleScrollToTop} to="/blog">
            <button className="button-primary">
              View All <MdKeyboardArrowRight />
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="row">
            {exploreData.slice(0, 3).map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
      <FAQ showAll={false} />
      {/* <div style={{ padding: "40px 0" }}>
                <img src={WannaWorkImage} alt="WannaWorkImage" width="100%" height="100%" />
            </div> */}
      
    </div>
  );
};

export default Home;
