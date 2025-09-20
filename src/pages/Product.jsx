import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom"; // React Router hook
import { Helmet } from "react-helmet";
import productData from "../data/productsData";
import { IoShareSocial } from "react-icons/io5";

const Product = () => {
  const { productKey } = useParams(); // Get the dynamic param from the URL
  const [product, setProduct] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchdata = () => {
    const product = productData?.find(
      (item) => item?.productKey === productKey
    );
    setProduct(product);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShareClick = () => {
    if (navigator.share) {
      // Use the Web Share API if available
      navigator
        .share({
          title: product?.title,
          text: product?.description,
          url: `https://www.pixelworld.ae/product/${productKey}`,
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback to modal for unsupported browsers
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shareableLink = `https://www.pixelworld.ae/product/${productKey}`;

  const schemaData = product?.telephone
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Pixelworld LED Lightings",
        url: "https://www.pixelworld.ae",
        logo: product?.logo,
        image: product?.image,
        description: product?.description,
        telephone: product?.telephone,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "408, Apartment M02, Persia Cluster, International City",
          addressLocality: "Dubai",
          addressCountry: "UAE",
        },
        sameAs: [
          "https://www.instagram.com/pixelworldfzc",
          "https://x.com/Pixelworldfzc",
          "https://www.facebook.com/profile.php?id=61573776366139",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: product?.title || "Outdoor LED Screens",
            description:
              product?.description ||
              "Durable, weatherproof outdoor LED displays designed for advertising, events, malls, stadiums, and smart city projects.",
            brand: "Pixelworld",
            category: "LED Display",
            url:
              shareableLink || "https://www.pixelworld.ae/product/led-supplies",
            image:
              product?.image ||
              "https://www.pixelworld.ae/assets/images/outdoor-led-screens.jpg",
          },
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product?.title,
        description: product?.description,
        image: product?.image,
        url: shareableLink,
        brand: {
          "@type": "Brand",
          name: "Pixelworld",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
          url: shareableLink,
        },
      };

  return (
    <div className="container-fluid">
      {product && (
        <Helmet>
          <title>{product?.metaTitle}</title>
          <meta
            name="description"
            content={
              product?.metaDescription ||
              "PixelWorld digital kiosks in Dubai, UAE."
            }
          />
          <meta
            name="keywords"
            content={
              product?.keywords?.length
                ? product.keywords.join(", ")
                : "digital kiosk Dubai, interactive kiosk UAE, PixelWorld kiosks"
            }
          />
          <link rel="canonical" href={shareableLink} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="product" />
          <meta property="og:title" content={product?.metaTitle} />
          <meta property="og:description" content={product?.ogDescription} />
          <meta property="og:url" content={shareableLink} />
          <meta property="og:image" content={product?.image} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={product?.metaTitle} />
          <meta
            name="twitter:description"
            content={product?.twitterDescription}
          />
          <meta name="twitter:image" content={product?.image} />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="product-title w-75 ">{product?.title}</h1>
        <div>
          <IoShareSocial
            size={28}
            onClick={handleShareClick}
            style={{ cursor: "pointer" }}
            title="Share this blog"
          />
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src={product?.image}
          alt={`${product?.title}`}
          className="product-image"
        />
      </div>

      <div className="product-page">
        {/* Intro paragraph */}
        {product?.intro && (
          <p className="product-description">{product.intro}</p>
        )}

        {/* Numbered or bullet list */}
        <ol className="product-title">
          {product?.products.map((item, index) => (
            <li key={index}>
              <div className="product-title">{item.title}</div>
              {item.intro && (
                <p className="product-description">{item.intro}</p>
              )}
              {item.description && (
                <p className="product-description">{item.description}</p>
              )}

              {/* Recursive subPoints */}
              {item.subPoints && (
                <ul className="ul-product">
                  {item.subPoints.map((point, subIndex) => (
                    <li key={subIndex} className="product-description">
                      {typeof point === "string" ? (
                        point
                      ) : (
                        <>
                          <div>{point.title}</div>
                          {point.subPoints && (
                            <ul className="ul-product">
                              {point.subPoints.map((nested, nestedIndex) => (
                                <li key={nestedIndex}>{nested}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {item.conclusion && (
                <p className="product-description">{item.conclusion}</p>
              )}
            </li>
          ))}
        </ol>

        {/* Outro / conclusion paragraph */}
        {product?.conclusion && (
          <p className="product-description mt-4">{product.conclusion}</p>
        )}
      </div>
      <div className="mb-4">
        {/* <h2 className='product-title'>Conclusion</h2>
                <p className='product-description'>{product?.description}</p> */}
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
                href={`https://wa.me/?text=${encodeURIComponent(
                  shareableLink
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Share on WhatsApp
              </a>
              <a
                href={`mailto:?subject=${
                  productData?.title
                }&body=${encodeURIComponent(shareableLink)}`}
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

export default Product;
