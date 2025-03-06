import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import innovateDisplayImage from '../assets/InnovateDisplayImage.png'

import logo from '../assets/px-logo-web.png'
import { Helmet } from 'react-helmet';




import Marquee from "react-fast-marquee";
// import ImageOne from '../assets/ImageOne.jpg'
// import ImageTwo from '../assets/ImageTwo.png'
// import ImageThree from '../assets/ImageThree.jpg'
// import ImageFour from '../assets/ImageFour.png'
// import ImageFive from '../assets/ImageFive.jpg'
import AboutUsHome from '../assets/AboutUsHome.jpg'


import WannaWorkImage from '../assets/WannaWorkImage.svg'

import { IoMdArrowForward } from 'react-icons/io'
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { CiDiscount1 } from 'react-icons/ci';
import { VscTools } from 'react-icons/vsc';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import FAQ from '../components/FAQ'
import Explore from '../components/Explore'
import { FaWhatsapp } from 'react-icons/fa'
import exploreData from '../data/exploreData';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { OurProjectLeft, OurProjectRight } from '../data/ProjectsData';
import HeroVideo from '../assets/hero-clip.mp4'


const cardData = [
    {
        // title: 'Client-Centric',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier brings award-winning LED solutions to the LED industry by delivering high-quality, customizable, and durable products. As one of the leading companies in the UAE with international recognition, we specialize in the production and installation of indoor and outdoor LED screens and the supply of rental and staging products.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a solutions-oriented approach, we continuously innovate and develop new products based on our customers' needs, regardless of the project size. Recognized with multiple awards, our one-of-a-kind and imaginative visual projects cater to a wide range of clients, amplifying creativity while ensuring cost-effective and reliable solutions.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br/>
<br/><strong>Our Expertise</strong><br/><br/>
At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
<br/>•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
<br/>•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
<br/>•	LED Signage: Digital signage for information, food menus, and shop signage.
<br/>•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
<br/>•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
<br/>•	Transparent LED: Innovative displays for retail and creative environments.
<br/>•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br/>
<br/><strong>Services</strong><br/>

<br/><b>Indoor Solutions</b><br/>
•	Retail Indoor LED
<br/>•	LED for Schools
<br/>•	LED Screens for Meeting Rooms
<br/>•	Flexible LED
<br/>•	90 and 360-degree LED Screens
<br/>•	Entrance Frame LED Screens
<br/>•	Digital Signage for Information
<br/>•	Shop Signage LED
<br/>•	LED for Corporate Offices
<br/>
<b>
Outdoor Solutions</b>
<br/>•	Outdoor LED Screens for Billboards
<br/>•	Digital Signage for Food Menus
<br/>•	Outdoor Mesh LED
<br/>•	Outdoor Net LED<br/>
<b>
Specialty LED Solutions</b><br/>
•	LED Digital Posters
<br/>•	3D LED Stands
<br/>•	Floor LEDs
<br/>•	Digital Kiosks
<br/>•	Ceiling LEDs
<br/>•	Creative Retail LED Screens
<br/>•	Transparent LEDs for Retail
<br/>
<br/>
Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology.`,
    },
    // {
    //     title: 'Reliability',
    //     description: 'Ensuring seamless performance and timely execution for every project.',
    // },
    // {
    //     title: 'Quality',
    //     description: 'Committed to providing top-tier products and exceptional service.',
    // },
];




const Home = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth', // Smooth scroll animation
        });
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Pixelworld",
        "url": "https://www.pixelworld.ae",
        "logo": { logo }, // Replace with your logo URL
        "description": "Discover Pixelworld's innovative LED screen advertising solutions. From indoor and outdoor LED screens to traditional advertising, we bring your brand to life.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971585321473", // Replace with your contact number
            "contactType": "Customer Service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.facebook.com/share/1FUH2at763/?mibextid=wwXIfr",
            "https://www.instagram.com/pixelworldfzc?igsh=OHMwc3Zpazg3Y25y",
            // "https://www.linkedin.com/company/pixelworld",
            "https://medium.com/@pixelworldfzc",
            "https://www.blogger.com/u/2/blog/posts/4721417252822204922"
        ]
    };

    return (
        <div className='home'>
            <Helmet>
                <title>LED Screen Suppliers in Dubai | Display Screen | LED Display</title>
                <meta name="description" content="Leading outdoor LED screen supplier in Dubai. High-quality LED screen displays and display screens. Call now for the best LED solutions in Dubai!" />
                <meta name="keywords" content="led screen suppliers in dubai, outdoor led screen supplier in dubai, display screen, led screen display" />
                <link rel="canonical" href="https://www.pixelworld.ae" />
                <meta name="twitter:image" content={heroImage} />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <div className='hero-section'>
                <div className='hero-image-container'>

                    {/* <img src={heroImage} alt='heroImage' width="100%" height="100%" className='hero-image' /> */}
                    <video src={HeroVideo} autoPlay muted className="hero-image">
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-image-overlay"></div>
                    <div className='hero-content'>
                        <div className='d-flex align-items-center flex-column'>
                            {/* <h2 className='hero-title'>Pixel World</h2> */}
                            {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
                        </div>
                        <div className='hero-subcontent'>
                            {/* <div>
                                <button className='hero-explore-btn'>
                                    Chat with Expert <IoMdArrowForward size={20} />
                                </button>
                            </div> */}

                            <h1 className='hero-text'>No. 1 Dubai LED Screen Company, with indoor and outdoor LED screens.</h1>
                            <div className='d-flex gap-1'>
                                <a href='https://wa.me/+971585321473' className='text-decoration-none' target='_blank'><button className='buttonTwo d-flex align-items-center gap-2'><FaWhatsapp size={50} /> +971585321473</button></a>
                                <a href='https://wa.me/+971555131473' className='text-decoration-none' target='_blank'><button className='buttonTwo d-flex align-items-center gap-2'><FaWhatsapp size={50} /> +971555131473</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='innovateDisplay'>
                <div className='d-flex'>
                    <h2>About Us</h2>
                    {/* <img src={innovateDisplayImage} alt='Innovate Display' className='innovateDisplay-image' width="100%" height="100%" /> */}
                </div>
                <div className=''>
                    {/* <h1 className='innovateDisplay-title'>
                        Your Trusted Partner in Every <br /> Display Innovation
                    </h1> */}
                    {/* <div className='innovateDisplay-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div> */}
                    <div className='row'>
                        {cardData.map((card, index) => (
                            <div key={index} className='col-lg-8  mb-2'>
                                {/* <div className='innovateDisplay-card'> */}
                                {/* <div className='innovateDisplay-card-title'>{card.title}</div> */}
                                {/* <h2 className='innovateDisplay-card-description' dangerouslySetInnerHTML={{ __html: card?.description }} />
                                     */}
                                <h2 className='innovateDisplay-card-description'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier offers premium-quality indoor and outdoor LED screens along with digital advertising solutions for to your needs. We provide customizable LED video walls at affordable prices, ensuring durable products that meet both installation and rental requirements. As a leading LED screen supplier in the UAE, recognized internationally, we handle projects of all sizes, from small businesses to large enterprises.
                                    <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Pixelworld, we specialize in delivering creative, cost-effective LED screen solutions for various applications, including LED video walls for exhibitions, affordable LED displays for trade shows, and outdoor LED screens for advertising in Dubai. Our award-winning products include high-resolution LED screen rentals for events and stages, permanent installations, and custom LED screen designs.
                                    <br /><br />Whether you're a global company or a local business looking for cheap but high-quality LED screens in UAE, we ensure your brand connects with your audience through visually stunning LED displays. With our affordable digital signage in Dubai, you can enhance your marketing efforts and achieve outstanding results.
                                    <br /><br /> Choose Pixelworld for reliable, budget-friendly LED solutions, including LED screens for events in UAE, custom LED walls for conferences, LED video wall, LED signage for retail stores for your shop front sign and indoor LED screens for retail stores. Let us help you elevate your brand with top-rated, energy-efficient LED screens that offer exceptional quality and performance.
                                    <br /><br />"Are you still looking for LED screens in Dubai? Please contact us to receive the best quote and discover the perfect LED screen solution for your business."
                                    {/* <b>Indoor LED Screens:</b> High-quality displays for retail, schools, offices, and meeting rooms.<br />
                                        <br /><b>Outdoor LED Screens:</b> Durable screens for billboards and large ads.<br />
                                        <br /><b>LED Signage:</b> Digital signage for menus, information, and store signs.<br />
                                        <br /><b>Home & Office LED Solutions:</b> Stylish and affordable LED screens for homes and offices.<br />
                                        <br /><b>Custom LED Walls:</b> Flexible and unique LED designs, including 90° and 360° screens.<br />
                                        <br /><b>Transparent LED:</b> Innovative displays for retail and creative spaces.<br />
                                        <br /><b>3D and Floor LEDs:</b> Cutting-edge technology for immersive experiences.<br /> */}
                                    {/* <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br /> */}
                                    {/* <br /><strong>Our Expertise</strong><br /><br />
                                        At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
                                        <br />•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
                                        <br />•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
                                        <br />•	LED Signage: Digital signage for information, food menus, and shop signage.
                                        <br />•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
                                        <br />•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
                                        <br />•	Transparent LED: Innovative displays for retail and creative environments.
                                        <br />•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br />
                                        <br /><strong>Services</strong><br /><br />
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className=' bg-white p-3 shadow rounded h-100'>
                                                <b>Indoor Solutions</b><br /><br />
                                                •	Retail Indoor LED
                                                <br />•	LED for Schools
                                                <br />•	LED Screens for Meeting Rooms
                                                <br />•	Flexible LED
                                                <br />•	90 and 360-degree LED Screens
                                                <br />•	Entrance Frame LED Screens
                                                <br />•	Digital Signage for Information
                                                <br />•	Shop Signage LED
                                                <br />•	LED for Corporate Offices
                                                <br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Outdoor Solutions</b><br />
                                                <br />•	Outdoor LED Screens for Billboards
                                                <br />•	Digital Signage for Food Menus
                                                <br />•	Outdoor Mesh LED
                                                <br />•	Outdoor Net LED<br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Specialty LED Solutions</b><br /><br />
                                                •	LED Digital Posters
                                                <br />•	3D LED Stands
                                                <br />•	Floor LEDs
                                                <br />•	Digital Kiosks
                                                <br />•	Ceiling LEDs
                                                <br />•	Creative Retail LED Screens
                                                <br />•	Transparent LEDs for Retail
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology. */}
                                </h2>
                                {/* </div> */}
                            </div>
                        ))}
                        <div className='col-lg-4'>
                            <div className='explore-image-container'>
                                <img src={AboutUsHome} alt='About Us Home' className='explore-image' width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='occasionReady'>
                <div className='occasionReady-title'>From Setup to Support, <br />
                    We've Got Your Occasions Covered</div>
                <div className='occasionReady-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div>
                <div className='row my-5'>
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

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card h-100'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Digital Kiosk Solutions</div>
                                <CiDiscount1 size={24} />
                            </div>
                            <div className='occasionReady-card-description'>

                                •	Interactive Touchscreen Kiosks
                                •	Self-Service Digital Kiosks
                                •	Indoor & Outdoor Digital Kiosks
                                •	Wayfinding Digital Kiosks
                                •	Digital Kiosks for Retail and Malls
                                •	Queue Management Kiosks
                                •	Digital Menu Boards
                                •	Information and Directory Kiosks
                                •	Advertising and Promotion Kiosks
                                •	Customizable Digital Kiosks for Branding

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card h-100'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Indoor LED Solutions</div>
                                <VscTools size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                •	High-Resolution Indoor LED Displays
                                •	LED Screens for Retail and Showrooms
                                •	Corporate Office LED Displays
                                •	LED Displays for Meeting Rooms and Conferences
                                •	Interactive Indoor LED Screens
                                •	Flexible LED Screens for Custom Installations
                                •	90° and 360° Curved LED Screens
                                •	Digital Signage for Indoor Advertising
                                •	Indoor LED Walls for Events and Exhibitions
                                •	Custom Indoor LED Solutions for Branding
                                •	Seamless Video Walls for Immersive Experiences
                                •	Energy-Efficient LED Displays for Long-Term Use
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mb-4'>
                        <div className='occasionReady-card h-100'>
                            <div className='d-flex justify-content-between align-items-center text-white'>
                                <div className='occasionReady-card-title'>Outdoor LED Solutions</div>
                                <IoPeopleOutline size={24} />
                            </div>
                            <div className='occasionReady-card-description'>
                                •	High-Resolution Outdoor LED Displays
                                •	LED Screens for Billboards and Digital Signage
                                •	Weatherproof Outdoor LED Screens
                                •	Outdoor Advertising LED Walls
                                •	Large-Scale LED Displays for Events
                                •	Interactive Outdoor LED Screens
                                •	Outdoor Mesh and Net LED Screens
                                •	LED Screens for Stadiums and Arenas
                                •	Digital Menu Boards for Outdoor Spaces
                                •	Customizable Outdoor LED Displays for Branding
                                •	Outdoor LED Screens for Public Spaces and Malls
                                •	Solar-Powered Outdoor LED Solutions
                                •	Energy-Efficient Outdoor LED Screens for Long-Term Use
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

            <div className='our-projects-container'>
                {/* <p className='our-project-subtext'>Still Searching ?...</p> */}
                <h2 className='our-project-title'>Our Projects and Clients</h2>
                <div className='my-3'>
                    <Marquee direction='left' pauseOnHover={true} className='mb-3'>
                        {OurProjectLeft.map((project, index) =>
                            <div key={index} className='our-projects-image-container'>
                                <img src={project.image} alt='Image one' width="100%" height="100%" className='our-projects-image' />
                                <div className='hero-image-overlay '></div>
                                <div className='our-projects-content'>
                                    <h6>{project.place}</h6>
                                    <p className='m-0'>{project.model}</p>
                                </div>
                            </div>
                        )}
                    </Marquee>

                    <Marquee direction='right' pauseOnHover={true} className='mb-3'>
                        {OurProjectRight.map((project, index) =>
                            <div key={index} className='our-projects-image-container'>
                                <img src={project.image} alt='Image one' width="100%" height="100%" className='our-projects-image' />
                                <div className='hero-image-overlay '></div>
                                <div className='our-projects-content'>
                                    <h6>{project.place}</h6>
                                    <p className='m-0'>{project.model}</p>
                                </div>
                            </div>
                        )}
                    </Marquee>
                </div>

            </div>
            <div className='px-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='product-title text-white'>Recent News Post</h2>
                    <Link onClick={handleScrollToTop} to='/blog'>
                        <button className='button-primary'>View All <MdKeyboardArrowRight /></button></Link>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='row'>
                        {exploreData.slice(0, 4).map((item, index) => (
                            <div key={index} className='col-md-4'>
                                <Link onClick={handleScrollToTop} to={`/blog/${item.blogKey}`} className='text-decoration-none text-dark' >
                                    <div className='service-item'>
                                        <div className='service-image-container'>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className='service-image'
                                                loading='lazy'
                                                height="100%"
                                                width="100%"
                                            />
                                        </div>
                                        <p className='service-text'>{item.title}</p>
                                        <button className='blog-button'>Read more</button>
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
    )
}

export default Home