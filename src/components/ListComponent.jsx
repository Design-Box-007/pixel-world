const KioskFeatures = ({ kiosks = [] }) => {
  return (
    <div className="kiosk-container">
      {kiosks.map((kiosk, idx) => (
        <div key={idx} className="kiosk-card">
          {/* Card Section */}
          {(kiosk.cardImage || kiosk.cardTitle || kiosk.cardDescription) && (
            <div className="kiosk-image-card">
              {kiosk.cardImage && (
                <div className="product-image-container">
                  <img
                    src={"https://placehold.co/400"}
                    alt={kiosk.cardAlt || "card image"}
                    className="product-image"
                  />
                </div>
              )}
              {(kiosk.cardTitle || kiosk.cardDescription) && (
                <div>
                  {kiosk.cardTitle && (
                    <h2 className="product-title">{kiosk.cardTitle}</h2>
                  )}
                  {kiosk.cardDescription && (
                    <p
                      className="product-description"
                      dangerouslySetInnerHTML={{
                        __html: kiosk.cardDescription,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          )}

          {/* Titles */}
          {kiosk.titles?.length > 0 && (
            <>
              {kiosk.titles.map((title, i) => (
                <h2 key={i}>{title}</h2>
              ))}
            </>
          )}

          {/* Features */}
          {kiosk.features?.length > 0 && (
            <ul>
              {kiosk.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
          )}

          {/* Footers */}
          {kiosk.footers?.length > 0 && (
            <>
              {kiosk.footers.map((footer, k) => (
                <p key={k}>{footer}</p>
              ))}
            </>
          )}

          {/* Second Card Section */}
          {(kiosk.cardTitle2 || kiosk.cardDescription2) && (
            <div>
              {kiosk.cardTitle2 && (
                <h2 className="product-title">{kiosk.cardTitle2}</h2>
              )}
              {kiosk.cardDescription2 && (
                <p
                  className="product-description"
                  dangerouslySetInnerHTML={{
                    __html: kiosk.cardDescription2,
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KioskFeatures;
