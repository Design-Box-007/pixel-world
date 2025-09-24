import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoShareSocial } from "react-icons/io5";
import insdustriesData from "../data/industriesData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import KioskFeatures from "../components/ListComponent";
import industryMetaData from "../data/metaData";

const Industry = () => {
  const { industryKey } = useParams();
  const [productData, setProductData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faqState, setFaqState] = useState([]);

  useEffect(() => {
    const product = insdustriesData.find(
      (item) => item.industryKey === industryKey
    );
    setProductData(product);

    if (product?.faq) {
      setFaqState(product.faq.map(() => ({ isOpen: false })));
    }
  }, [industryKey]);

  const toggleFAQ = (index) => {
    setFaqState((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: productData?.title,
          text: productData?.description,
          url: `https://www.pixelworld.ae/industry/${industryKey}`,
        })
        .catch(console.log);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const shareableLink = `https://www.pixelworld.ae/industry/${industryKey}`;

  // Match dynamic metadata
  const productMeta = industryMetaData.find(
    (meta) => meta.industryKey === industryKey
  );

  return (
    <div className="industry-main">
      {productData && productMeta && (
        <Helmet>
          <title>{productMeta.metaTitle}</title>
          <meta
            name="description"
            content={productMeta.metaDescription || productData.description}
          />
          <meta
            name="keywords"
            content={
              productMeta.keywords?.length
                ? productMeta.keywords.join(", ")
                : productData?.keywords?.join(", ")
            }
          />

          <meta name="robots" content="index, follow" />
          <meta name="author" content="PixelWorld" />
          <meta name="language" content="English" />
          <meta name="distribution" content="global" />
          <meta name="revisit-after" content="7 days" />

          <link rel="canonical" href={shareableLink} />

          {/* Open Graph */}
          <meta property="og:type" content={productMeta.type} />
          <meta property="og:title" content={productMeta.metaTitle} />
          <meta property="og:description" content={productMeta.ogDescription} />
          <meta property="og:url" content={shareableLink} />
          <meta property="og:image" content={productMeta.image} />
          <meta property="og:site_name" content="PixelWorld" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={productMeta.metaTitle} />
          <meta
            name="twitter:description"
            content={productMeta.twitterDescription}
          />
          <meta name="twitter:image" content={productMeta.image} />

          {productMeta.favicon && (
            <link
              rel="icon"
              href="https://www.pixelworld.ae/favicon.ico"
              type="image/x-icon"
            />
          )}

          {productMeta.canonical && (
            <link
              rel="canonical"
              href={`https://www.pixelworld.ae/industry/${productMeta.industryKey}`}
            />
          )}

          {/* Schema JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify(productMeta.schemaData)}
          </script>

          {productMeta.schemaData2 && (
            <script type="application/ld+json">
              {JSON.stringify(productMeta.schemaData2)}
            </script>
          )}

          {productMeta.schemaData3 && (
            <script type="application/ld+json">
              {JSON.stringify(productMeta.schemaData3)}
            </script>
          )}
        </Helmet>
      )}

      <div className="d-flex justify-content-between align-items-center">
        <h1 className="product-title w-75 text-black">{productData?.title}</h1>
        <IoShareSocial
          size={28}
          onClick={handleShareClick}
          style={{ cursor: "pointer" }}
          className="text-black"
          title="Share this blog"
        />
      </div>

      {/* Hero image */}
      <div className="hero-image-container">
        <img
          src={productData?.image}
          alt={productData?.title}
          className="product-image"
        />
      </div>

      {/* Description */}
      <div className="my-4">
        <h2 className="product-title text-black content-t-w">
          {productData?.subtitle}
        </h2>
        <p
          className="product-description text-black content-d-w"
          dangerouslySetInnerHTML={{ __html: productData?.description }}
        />
      </div>

      <hr className="text-black" />

      {/* Kiosk features */}
      <KioskFeatures kiosks={productData?.kioskData} />

      <hr className="text-black" />

      {/* FAQ */}
      <h2 className="product-title text-black">Frequently Asked Question</h2>
      {productData?.faq.map((item, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="faq-question">{item.question}</h2>
            <div className="text-primary">
              {faqState[index]?.isOpen ? (
                <IoIosArrowUp size={24} />
              ) : (
                <IoIosArrowDown size={24} />
              )}
            </div>
          </div>
          {faqState[index]?.isOpen && (
            <div
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}

      {/* Share Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Share this blog</h2>
            <p>Copy the link below or share via social media:</p>
            <input type="text" value={shareableLink} readOnly />
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

export default Industry;
