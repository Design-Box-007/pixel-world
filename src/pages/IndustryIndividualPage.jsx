import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoShareSocial } from "react-icons/io5";
import insdustriesData from "../data/industriesData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import KioskFeatures from "../components/ListComponent";

const Industry = () => {
  const { industryKey } = useParams();
  const [productData, setProductData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faqState, setFaqState] = useState([]);

  const fetchdata = () => {
    const productData = insdustriesData.find(
      (item) => item.industryKey === industryKey
    );
    setProductData(productData);
    if (productData?.faq) {
      setFaqState(productData.faq.map(() => ({ isOpen: false })));
    }
  };

  useEffect(() => {
    fetchdata();
  }, [industryKey]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleFAQ = (index) => {
    setFaqState((prevFaqState) =>
      prevFaqState.map((faq, i) =>
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
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const shareableLink = `https://www.pixelworld.ae/insdustry/${industryKey}`;

  return (
    <div className="industry-main">
      {productData && (
        <Helmet>
          <title>{productData?.title} - PixelWorld</title>
          <meta name="description" content={productData?.description} />
          <meta name="keywords" content={productData?.keywords?.join(", ")} />
          <meta property="og:title" content={productData?.title} />
          <meta property="og:description" content={productData?.description} />
          <meta property="og:image" content={productData?.image} />
          <meta
            property="og:url"
            content={`https://www.pixelworld.ae/industry/${industryKey}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={productData?.title} />
          <meta name="twitter:description" content={productData?.description} />
          <meta name="twitter:image" content={productData?.image} />
        </Helmet>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="product-title w-75 text-black">{productData?.title}</h1>
        <div>
          <IoShareSocial
            size={28}
            onClick={handleShareClick}
            style={{ cursor: "pointer" }}
            className="text-black"
            title="Share this blog"
          />
        </div>
      </div>

      {/* container 1 */}
      <div className="product-image-container">
        <img
          src={productData?.image}
          alt={`${productData?.title}`}
          className="product-image"
        />
      </div>
      <div className="my-4">
        <h2 className="product-title text-black">{productData?.subtitle}</h2>
        <p
          className="product-description text-black"
          dangerouslySetInnerHTML={{ __html: productData?.description }}
        ></p>
      </div>
      <hr className="text-black" />

      {/* container 2 */}

      <KioskFeatures kiosks={productData?.kioskData}/>

      <hr className="text-black" />

      <h2 className="product-title text-black">Frequently Asked Question</h2>
      {productData?.faq.map((item, index) => (
        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="faq-question">{item.question}</h2>
            <div className="text-primary">
              {!faqState[index].isOpen ? (
                <IoIosArrowDown size={24} fontWeight={500} />
              ) : (
                <IoIosArrowUp size={24} fontWeight={500} />
              )}
            </div>
          </div>
          {faqState[index].isOpen && (
            <div
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}

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

export default Industry;
