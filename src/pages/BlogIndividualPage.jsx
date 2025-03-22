import React, { useEffect, useState } from 'react';
import exploreData from '../data/exploreData';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { IoShareSocial } from 'react-icons/io5';
import logo from '../assets/px-logo-web.png'


const BlogIndividualPage = () => {
    const { blogKey } = useParams();
    const [productData, setProductData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchdata = () => {
        const productData = exploreData.find((item) => item?.blogKey === blogKey);
        setProductData(productData);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleShareClick = () => {
        if (navigator.share) {
            // Use the Web Share API if available
            navigator.share({
                title: productData?.title,
                text: productData?.description,
                url: `https://www.pixelworld.ae/blog/${blogKey}`,
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            // Fallback to modal for unsupported browsers
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const shareableLink = `https://www.pixelworld.ae/blog/${blogKey}`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": productData?.title,
        "description": productData?.description,
        "image": productData?.image,
        "url": shareableLink,
        "datePublished": productData?.publishedDate,
        "dateModified": productData?.modifiedDate || productData?.publishedDate,
        "author": {
            "@type": "Person",
            "name": productData?.authorName || "Pixelworld"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Pixelworld",
            "logo": {
                "@type": "ImageObject",
                "url": { logo } // Replace with your logo URL
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareableLink
        }
    };

    return (
        <div className="container-fluid">
            {productData && (
                <Helmet>
                    <title>{productData.title} | Pixelworld</title>
                    <meta name="description" content={productData?.description} />
                    <meta property="og:title" content={productData?.title} />
                    <meta property="og:description" content={productData?.description} />
                    <meta property="og:image" content={productData?.image} />
                    <meta property="og:url" content={shareableLink} />
                    <meta name="twitter:title" content={productData?.title} />
                    <meta name="twitter:description" content={productData?.description} />
                    <meta name="twitter:image" content={productData?.image} /><script type="application/ld+json">
                        {JSON.stringify(schemaData)}
                    </script>
                </Helmet>
            )}
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='product-title w-75'>{productData?.title}</h1>
                <div>
                    <IoShareSocial
                        size={28}
                        onClick={handleShareClick}
                        style={{ cursor: 'pointer' }}
                        title="Share this blog"
                    />
                </div>
            </div>
            <div className="product-image-container">
                <img
                    src={productData?.image}
                    alt={`${productData?.title}`}
                    className="product-image"
                />
            </div>
            <div className='my-4'>
                <h2 className='product-description'>{productData?.description}</h2>
            </div>
            <hr />
            {productData?.lists.map((item, index) => (
                <div className='my-4' key={index}>
                    <h2 className='product-title'>{index + 1}. {item.title}</h2>
                    <p className='product-description'>{item.details}</p>
                    <ul>
                        {
                           item.subpoints && item?.subpoints.map((item, index) => (
                                <li className='my-4 subpoints' key={index}>
                                    <p className='product-description'>
                                        <b className='light-black'>{item.title} :</b> {item.details}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                    <hr />
                </div>
            ))}
            <div className='mb-4'>
                <h2 className='product-title'>Conclusion</h2>
                <p className='product-description'>{productData?.description}</p>
            </div>



            {/* Modal for sharing */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Share this blog</h2>
                        <p>Copy the link below or share via social media:</p>
                        <input
                            type="text"
                            value={shareableLink}
                            readOnly
                            className="share-link-input"
                        />
                        <div className="share-buttons">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${shareableLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Share on Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${shareableLink}&text=${productData?.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-info"
                            >
                                Share on Twitter
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(shareableLink)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                            >
                                Share on WhatsApp
                            </a>
                            <a
                                href={`mailto:?subject=${productData?.title}&body=${encodeURIComponent(shareableLink)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Share via Email
                            </a>
                        </div>
                        <div className="modal-actions">
                            <button
                                onClick={() => navigator.clipboard.writeText(shareableLink)}
                                className="btn btn-primary"
                            >
                                Copy Link
                            </button>
                            <button onClick={handleCloseModal} className="btn btn-secondary">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogIndividualPage;
