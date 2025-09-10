import React from 'react';
import "./Industries.css"
import { Helmet } from 'react-helmet';
import ExploreImageOne from '../assets/Industries/mainImage.jpg';
import { Link } from 'react-router-dom';
import industriesData from '../data/industriesData';

const Industries = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container-fluid">
            <Helmet>
                <title>Industries - Pixel World</title>
                <meta name="description" content="Discover insights, trends, and solutions for events, advertising, and beyond in the world of LED displays." />
                <meta name="keywords" content="LED displays, events, advertising, industries, Pixel World" />
            </Helmet>

            <div className='hero-image-container rounded mb-4'>
                <img src={ExploreImageOne} alt='Main LED Display' width="100%" height="100%" className='hero-container' />
                <div className="blog-image-overlay"></div>
                <div className='blog-content'>
                    <div className='d-flex align-items-center flex-column'>
                        {/* <h2 className='hero-title'>Pixel World</h2> */}
                        {/* <div className='hero-description'>Seamless Visual Experiences, From Concept to Completion</div> */}
                    </div>
                    <div className='blog-subcontent'>
                        <h2 className='blog-text'>Industries</h2>
                        <h1 className='blog-title'>Illuminating Ideas: Explore Our High Quality LED Solutions</h1>
                        <h2 className='blog-text'>Pixelworld delivers premium LED solutions with global support across various sectors.</h2>
                    </div>
                </div>
            </div>

            <h2 className='product-title text-white'>Our Industries</h2>

            <div className='d-flex justify-content-between align-items-center'>
                <div className='row'>
                    {industriesData.map((item, index) => (
                        <div key={index} className='col-md-4'>
                            <Link onClick={handleScrollToTop} to={`/industry/${item.industryKey}`} className='text-decoration-none text-dark'>
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
                                    <h5 className='service-text content-t2-w'>{item.title}</h5>
                                    <p className='content-d-w'>{item.subtitle}</p>
                                    <button className='blog-button'>Learn more</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;