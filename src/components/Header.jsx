import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // React Router hook
import logo from '../assets/px-logo-web.png';
import introVideo from '../assets/intro.mp4'; // Add your video here
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
// Add a CSS file for smooth animations

const Header = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [navColor, setNavColor] = useState('white'); // Default text color for nav
  const [navBackgroundColor, setNavBackgroundColor] = useState('transparent'); // Default navbar background color
  const [isLoading, setIsLoading] = useState(true); // State for loading screen
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out effect

  useEffect(() => {
    // Set a timeout for the duration of the video (in milliseconds)
    const videoDuration = 3600; // Replace with the actual duration of your MP4 video
    const timeout = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setIsLoading(false), 1000); // Delay hiding the loader to complete fade-out
    }, videoDuration);

    // Cleanup the timeout
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Update activeLink based on current path
    setActiveLink(location.pathname);

    // Update nav text color and navbar background color based on the page
    if (location.pathname === '/') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for Home page
      document.body.style.background = 'var(--black-color)'; // Background color for Home page
    } else if (location.pathname === '/aboutus') {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for About Us page
      document.body.style.background = 'var(--white-color)'; // Background color for About Us page
    } else if (location.pathname === '/projects') {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Projects page
      document.body.style.background = 'var()'; // Background color for Projects page
    } else if (location.pathname === '/services') {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Services page
      document.body.style.background = 'var(--white-color)'; // Background color for Services page
    }
    else if (location.pathname.includes('/product')) {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Services page
      document.body.style.background = 'var(--white-color)'; // Background color for Services page
    } else if (location.pathname.includes('/blog')) {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Services page
      document.body.style.background = 'var(--white-color)'; // Background color for Services page
    } else if (location.pathname === '/faq') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for FAQ page
      document.body.style.background = 'var(--black-color)'; // Background color for FAQ page
    } else if (location.pathname === '/contact') {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for FAQ page
      document.body.style.background = 'var(--black-color)'; // Background color for FAQ page
    }  else if (location.pathname.includes('/industries')) {
      setNavColor('var(--white-color)');
      setNavBackgroundColor('var(--black-color)'); // Navbar background for FAQ page
      document.body.style.background = 'var(--black-color)'; // Background color for FAQ page
    }  else if (location.pathname.includes('/industry')) {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color)'); // Navbar background for Services page
      document.body.style.background = 'var(--black-color)'; // Background color for Services page
    }  else {
      setNavColor('var(--black-color)');
      setNavBackgroundColor('var(--white-color) '); // Default navbar background
      document.body.style.background = 'linear-gradient(180deg, #FFFFFF 46.2%, #222222 52.72%, #222222 100%) ';
    }

    // Cleanup: Reset the background color when the component unmounts or when the page changes
    return () => {
      document.body.style.background = '';
    };
  }, [location]);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: 'smooth', // Smooth scroll animation
    });
  };


  if (isLoading) {
    return (
      <div
        className={`loader-container ${fadeOut ? 'fade-out' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
        }}
      >
        <video
          src={introVideo}
          autoPlay
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
        <h2
          className="loader-text"
          style={{
            fontSize: '2rem',
            color: 'white',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          Experience High Quality Led Screens <br /> and Digital Displays with Pixel World
        </h2>
      </div>
    );
  }

  return (
    <Navbar
      className="header"
      expand="lg"
      style={{
        color: navColor,
        background: navBackgroundColor,
        backdropFilter: 'blur(15px)',
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="header-title"
        style={{ color: navColor }}
      >
        <img src={logo} alt="Pixel World" width={150} height={45} />
        
      </Navbar.Brand>

      <Navbar.Toggle
        className='nav-toggle'
        aria-controls="navbar-nav"
      />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
            as={Link}
            to="/"
            style={{ color: navColor }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/aboutus' ? 'active' : ''}`}
            as={Link}
            to="/aboutus"
            style={{ color: navColor }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/industries' ? 'active' : ''}`}
            as={Link}
            to="/industries"
            style={{ color: navColor }}>
              Industries
            </Nav.Link>
          <Nav.Link
            className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
            as={Link}
            to="/projects"
            style={{ color: navColor }}
          >
            Gallery
          </Nav.Link><Nav.Link
            className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`}
            as={Link}
            to="/blog"
            style={{ color: navColor }}
          >
            Blogs
          </Nav.Link>
          {/* <Nav.Link
            className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}
            as={Link}
            to="/services"
            style={{ color: navColor }}
          >
            Services
          </Nav.Link> */}
          {/* <Nav.Link
            className={`nav-link ${activeLink === '/faq' ? 'active' : ''}`}
            as={Link}
            to="/faq"
            style={{ color: navColor }}
          >
            FAQ
          </Nav.Link> */}
         
        </Nav>

        <Link to='/contact' className='text-decoration-none'>
          <button className="button-one" >
            Get in Touch <IoArrowForwardCircleOutline size={20} />
          </button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
