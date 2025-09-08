
const KioskFeatures = ({
  titles = [],
  features = [],
  footers = [],
  cardImage,
  cardAlt,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="kiosk-container">
      {/* Top Card Section */}
      {cardImage || cardTitle || cardDescription ? (
        <div>
          <div className="product-image-container">
            {cardImage && (
              <img
                src={cardImage}
                alt={cardAlt || "card image"}
                className="product-image"
              />
            )}
          </div>
          <div className="my-4">
            {cardTitle && (
              <h2 className="product-title text-white">{cardTitle}</h2>
            )}
            {cardDescription && (
              <p
                className="product-description text-white"
                dangerouslySetInnerHTML={{ __html: cardDescription }}
              ></p>
            )}
          </div>
        </div>
      ) : null}

      {/* Titles */}
      {titles.map((title, i) => (
        <h2 key={i} className="kiosk-title">
          {title}
        </h2>
      ))}

      {/* Features */}
      <ul className="kiosk-list">
        {features.map((feature, index) => (
          <li key={index} className="kiosk-item">
            {feature}
          </li>
        ))}
      </ul>

      {/* Footers */}
      {footers.map((footer, j) => (
        <p key={j} className="kiosk-footer">
          {footer}
        </p>
      ))}
    </div>
  );
};

export default KioskFeatures;
