import images from "./images";

// src/data/industryMetaData.js
const industryMetaData = [
  {
    industryKey: "retail",
    metaTitle: "Retail LED & Digital Kiosk Solutions Dubai, UAE | PixelWorld",
    metaDescription:
      "PixelWorld provides LED screens & digital kiosk solutions for retail in Dubai & GCC. Enhance customer experience, boost engagement, and attract foot traffic with smart retail displays.",
    keywords: [
      "retail LED screens Dubai",
      "digital kiosks UAE",
      "retail signage Dubai",
      "LED displays for shops",
      "indoor LED screens UAE",
      "outdoor LED displays Dubai",
      "smart retail solutions GCC",
      "retail digital signage UAE",
    ],
    type: "product",
    ogDescription:
      "Transform your retail business with LED displays & digital kiosks. PixelWorld delivers scalable solutions for malls, boutiques & supermarkets across GCC.",
    twitterDescription:
      "Boost retail visibility & engagement with LED screens & kiosks across Dubai & GCC. Indoor, outdoor & interactive retail display solutions.",
    image: images.retailTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PixelWorld LED Lightings",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      image: "https://www.pixelworld.ae/assets/images/retail-led-solutions.jpg",
      description:
        "PixelWorld offers retail LED & digital kiosk solutions across Dubai, UAE & GCC. Indoor screens, outdoor displays & smart digital kiosks for customer engagement.",
      telephone: "+971585321473",
      address: {
        "@type": "PostalAddress",
        streetAddress: "408, Apartment M02, Persia Cluster, International City",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      sameAs: [
        "https://www.instagram.com/pixelworldfzc",
        "https://x.com/Pixelworldfzc",
        "https://www.facebook.com/profile.php?id=61573776366139",
      ],
      areaServed: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain"],
      offers: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retail LED & Digital Kiosk Solutions",
            description:
              "LED displays and interactive kiosks for retail, including indoor screens, outdoor billboards, and smart self-service kiosks.",
            category: "Retail Solutions",
          },
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  },
  {
    industryKey: "corporate",
    metaTitle: "Corporate LED & Digital Kiosk Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld provides advanced LED displays and digital kiosk solutions for corporate spaces across UAE, Saudi Arabia, Qatar, Oman & GCC. Enhance communication, visitor management & brand visibility.",
    keywords: [
      "corporate LED screens",
      "digital kiosks UAE",
      "indoor LED displays Dubai",
      "outdoor LED screens GCC",
      "visitor management kiosks",
      "office LED video walls",
      "LED signage Dubai",
      "PixelWorld corporate solutions",
      "LED display company UAE",
      "smart workplace technology",
    ],
    favicon: true,
    type: "website",
    ogDescription:
      "Transform your corporate environment with PixelWorld’s LED screens & smart digital kiosks. Serving UAE, KSA, Qatar, Oman & GCC.",
    twitterDescription:
      "PixelWorld delivers cutting-edge LED displays & digital kiosks for smart corporate spaces across UAE & GCC.",
    image: images.corpTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      description:
        "PixelWorld provides advanced LED displays and digital kiosk solutions for corporate spaces across UAE, Saudi Arabia, Qatar, Oman & GCC.",
      telephone: "+971585321473",
      address: {
        "@type": "PostalAddress",
        streetAddress: "408, Apartment M02, Persia Cluster, International City",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://www.instagram.com/pixelworldfzc",
        "https://x.com/Pixelworldfzc",
      ],
      areaServed: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
    },

    schemaData2: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is required for corporate LED screens and video walls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The required resolution depends on the screen size and viewing distance. PixelWorld helps corporates choose the ideal pixel pitch for maximum clarity.",
          },
        },
        {
          "@type": "Question",
          name: "Where can LED products be used in a corporate environment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED screens can be used in lobbies, meeting rooms, training rooms, branding walls, and outdoor building facades.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of digital kiosks for corporates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital kiosks improve visitor check-ins, offer navigation support, enable real-time meeting room booking, and enhance security with RFID/NFC or facial recognition.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between indoor and outdoor LED displays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Indoor LED displays are designed for high-definition visuals and corporate communication, while outdoor LEDs are weather-resistant and built for visibility in sunlight.",
          },
        },
        {
          "@type": "Question",
          name: "Can LED screens be rented for corporate events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, PixelWorld offers both rental and permanent installation options for corporate events, conferences, and exhibitions.",
          },
        },
      ],
    },
  },
  {
    industryKey: "hospitality",
    metaTitle: "Hospitality LED & Digital Kiosk Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld provides innovative LED displays and digital kiosk solutions for hotels, resorts, and restaurants across UAE, Saudi Arabia, Oman, Qatar & GCC. Enhance guest experience, streamline check-ins, and boost brand visibility.",
    keywords: [
      "hospitality LED screens",
      "hotel kiosks UAE",
      "digital menu boards Dubai",
      "restaurant LED displays GCC",
      "resort LED walls",
      "hotel check-in kiosks",
      "PixelWorld hospitality solutions",
      "LED display company UAE",
      "smart guest experience technology",
    ],
    canonical: true,
    favicon: true,
    type: "website",
    ogDescription:
      "Digitally elevate hotels, resorts, and restaurants with PixelWorld’s LED displays & smart kiosks. Serving UAE, KSA, Qatar, Oman & GCC.",
    twitterDescription:
      "Digitally elevate hotels, resorts, and restaurants with PixelWorld’s LED displays & smart kiosks. Serving UAE, KSA, Qatar, Oman & GCC.",
    image: images.hospMain,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      description:
        "PixelWorld provides innovative LED displays and digital kiosk solutions for the hospitality industry including hotels, resorts, and restaurants across UAE, Saudi Arabia, Oman, Qatar & GCC.",
      telephone: "+971585321473",
      address: {
        "@type": "PostalAddress",
        streetAddress: "408, Apartment M02, Persia Cluster, International City",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://www.instagram.com/pixelworldfzc",
        "https://x.com/Pixelworldfzc",
      ],
      areaServed: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
    },
    schemaData2: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is required for LED displays in hospitality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The resolution depends on screen size and viewing distance. PixelWorld helps hotels and restaurants choose the best pixel pitch for digital menu boards, lobbies, and event halls.",
          },
        },
        {
          "@type": "Question",
          name: "Where can LED displays be used in hotels and resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED displays can be installed in hotel lobbies, restaurants, banquet halls, conference rooms, lounges, spas, and even outdoor areas.",
          },
        },
        {
          "@type": "Question",
          name: "How do digital kiosks improve hospitality guest experiences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital kiosks enable faster check-ins, event registrations, restaurant ordering, multilingual support, and digital concierge services.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between indoor and outdoor LED displays in hospitality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Indoor LEDs focus on ambience and guest engagement inside hotels and restaurants, while outdoor LEDs are weather-resistant and designed to attract foot traffic and promote offers.",
          },
        },
        {
          "@type": "Question",
          name: "Can LED screens be rented for hospitality events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, PixelWorld offers rental LED screens for weddings, conferences, banquets, and temporary events along with permanent installations.",
          },
        },
      ],
    },
  },
  {
    industryKey: "hospital",
    metaTitle: "Hospital LED & Digital Kiosk Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld delivers LED displays and digital kiosks for hospitals and healthcare facilities across UAE, Saudi Arabia, Qatar, Oman & GCC. Streamline patient registration, improve communication, and enhance care with smart digital solutions.",
    keywords: [
      "hospital LED screens",
      "healthcare kiosks UAE",
      "patient check-in kiosks Dubai",
      "hospital LED signage GCC",
      "medical LED displays",
      "hospital wayfinding kiosks",
      "PixelWorld healthcare solutions",
      "LED display company UAE",
      "digital healthcare technology",
    ],
    canonical: true,
    favicon: true,
    type: "website",
    ogDescription:
      "Transform hospital operations with PixelWorld’s LED displays & smart kiosks. Serving UAE, KSA, Qatar, Oman & GCC.",
    twitterDescription:
      "PixelWorld offers advanced LED displays & patient kiosks for healthcare providers in UAE & GCC.",
    image: images.hospitalTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      description:
        "PixelWorld provides advanced LED displays and digital kiosks for hospitals and medical facilities across UAE, Saudi Arabia, Oman, Qatar & GCC.",
      telephone: "+971585321473",
      address: {
        "@type": "PostalAddress",
        streetAddress: "408, Apartment M02, Persia Cluster, International City",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://www.instagram.com/pixelworldfzc",
        "https://x.com/Pixelworldfzc",
      ],
      areaServed: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"],
    },
    schemaData2: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is ideal for hospital LED displays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best resolution depends on screen size and viewing distance. PixelWorld helps hospitals select the right pixel pitch for waiting rooms, lobbies, and wayfinding systems.",
          },
        },
        {
          "@type": "Question",
          name: "Where can LED displays be used in a hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED displays can be used in waiting rooms, emergency areas, lobbies, corridors, departments, and outdoor hospital facades.",
          },
        },
        {
          "@type": "Question",
          name: "How do digital kiosks improve hospital efficiency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital kiosks reduce queues by enabling self-check-in, appointment booking, real-time feedback, and wayfinding assistance.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between indoor and outdoor hospital LED displays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Indoor LEDs are designed for communication and patient education, while outdoor LEDs are weather-resistant and used for community messages, campaigns, and emergency alerts.",
          },
        },
        {
          "@type": "Question",
          name: "Can LED screens be rented for hospital events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, PixelWorld provides rental LED screens for health camps, medical conferences, vaccination drives, and temporary hospital events.",
          },
        },
      ],
    },
  },
  {
    industryKey: "exhibition-museum-and-art-galleries",
    metaTitle: "Exhibition, Museum & Art Galleries Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld transforms exhibitions, museums, and art galleries with interactive kiosks, LED video walls, and outdoor displays across UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain. Deliver immersive, interactive, and memorable visitor experiences.",
    keywords: [
      "museum digital displays",
      "exhibition LED screens",
      "art gallery technology",
      "interactive kiosks UAE",
      "indoor LED video walls",
      "outdoor LED displays",
      "digital signage for museums",
      "PixelWorld Gulf",
      "museum visitor engagement",
      "digital exhibition technology",
    ],
    canonical: true,
    favicon: true,
    type: "website",
    ogDescription:
      "Transform exhibitions, museums, and galleries with interactive kiosks, LED video walls, and outdoor displays. Trusted across UAE, Saudi Arabia, Qatar, Oman & Kuwait.",
    twitterDescription:
      "Interactive kiosks, LED video walls, and outdoor displays for exhibitions, museums & galleries in UAE and the Gulf region.",
    image: images.exhibitTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971585321473",
          contactType: "Sales",
          areaServed: ["AE", "SA", "QA", "OM", "KW", "BH"],
          availableLanguage: ["English", "Arabic"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://x.com/Pixelworldfzc",
        "https://www.instagram.com/pixelworldfzc",
      ],
    },
    schemaData2: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Exhibition, Museum & Art Galleries Solutions",
      description:
        "PixelWorld delivers immersive LED screens, interactive kiosks, and outdoor displays for exhibitions, museums, and art galleries across the Gulf region.",
      url: "https://www.pixelworld.ae/industry/exhibition-museum-and-art-galleries",
      publisher: {
        "@type": "Organization",
        name: "PixelWorld",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pixelworld.ae/assets/images/logo.png",
        },
      },
    },
    schemaData3: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is required for LED displays in museums and art galleries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pixel resolution depends on viewing distance. Higher resolution LED panels are recommended for close-up gallery displays, while larger pixel pitch works for wide exhibition halls.",
          },
        },
        {
          "@type": "Question",
          name: "Where can LED displays and digital signage be used in exhibitions, museums, and galleries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can be used in entrances, exhibit halls, interactive zones, auditoriums, outdoor facades, and promotional areas to enhance visitor engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How can interactive kiosks improve the experience of visitors in art galleries and museums?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kiosks provide multilingual support, wayfinding, digital collections, games, and feedback options, making the visit more engaging and accessible.",
          },
        },
      ],
    },
  },
  {
    industryKey: "home",
    metaTitle: "Smart Home & Residential LED Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld transforms homes and residences with LED video walls, digital kiosks, and smart display solutions across UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain. Create stylish, connected, and future-ready living spaces.",
    keywords: [
      "smart home LED displays",
      "residential video walls",
      "digital kiosks for homes",
      "home automation displays UAE",
      "indoor LED screens for living rooms",
      "outdoor LED for villas",
      "PixelWorld Gulf",
      "home theater LED walls",
      "smart lifestyle technology",
    ],
    canonical: true,

    type: "website",
    ogDescription:
      "Upgrade your home with interactive kiosks, immersive LED video walls, and outdoor displays. PixelWorld delivers smart residential solutions across UAE & Gulf.",
    twitterDescription:
      "Interactive kiosks, LED video walls, and outdoor displays for smarter, stylish homes across UAE and the Gulf region.",
    image: images.homeMain,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971585321473",
          contactType: "Sales",
          areaServed: ["AE", "SA", "QA", "OM", "KW", "BH"],
          availableLanguage: ["English", "Arabic"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://x.com/Pixelworldfzc",
        "https://www.instagram.com/pixelworldfzc",
      ],
    },
    schemaData2: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Smart Home & Residential LED Solutions",
      description:
        "PixelWorld delivers LED video walls, interactive kiosks, and outdoor display solutions for smarter, connected, and stylish homes across UAE and the Gulf.",
      url: "https://www.pixelworld.ae/industry/home",
      publisher: {
        "@type": "Organization",
        name: "PixelWorld",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pixelworld.ae/assets/images/logo.png",
        },
      },
    },
    schemaData3: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is ideal for LED displays in home theatres?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For home theatres, finer pixel pitch LED displays such as P1.2 to P2.5 deliver the best cinematic experience at short viewing distances.",
          },
        },
        {
          "@type": "Question",
          name: "Where can LED displays and lighting be used in a home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED displays can be installed in living rooms, bedrooms, home theatres, kitchens, gardens, and façades for both entertainment and design.",
          },
        },
        {
          "@type": "Question",
          name: "What types of events in a home require LED video walls or displays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They are perfect for movie nights, sports viewing, family gatherings, poolside parties, and celebrations.",
          },
        },
        {
          "@type": "Question",
          name: "How do LED lights improve ambiance and design in a home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED screens and lighting create immersive moods, display digital art, and elevate interior design with dynamic visuals.",
          },
        },
        {
          "@type": "Question",
          name: "Can LED screens be rented for home events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, PixelWorld provides rental LED screens for weddings, parties, and temporary home events.",
          },
        },
      ],
    },
  },
  {
    industryKey: "concerts-events-rental-staging",
    metaTitle: "Concerts, Events & Rental Staging Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld powers concerts, festivals, and live events with LED video walls, digital kiosks, and rental staging solutions across UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain. Deliver unforgettable experiences with cutting-edge event technology.",
    keywords: [
      "concert LED screens",
      "event staging UAE",
      "rental LED video walls",
      "outdoor event displays Gulf",
      "festival LED walls",
      "stage backdrops",
      "event kiosks UAE",
      "PixelWorld event solutions",
      "live streaming LED screens",
      "rental staging Dubai",
    ],
    canonical: true,

    type: "website",
    ogDescription:
      "LED video walls, staging, and digital kiosks for concerts, festivals, and events across the Gulf. PixelWorld transforms live experiences with immersive technology.",
    twitterDescription:
      "Enhance concerts & live events with immersive LED walls, kiosks, and staging solutions across UAE & the Gulf.",
    image: images.concertTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/assets/images/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971585321473",
          contactType: "Sales",
          areaServed: ["AE", "SA", "QA", "OM", "KW", "BH"],
          availableLanguage: ["English", "Arabic"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://x.com/Pixelworldfzc",
        "https://www.instagram.com/pixelworldfzc",
      ],
    },
    schemaData2: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Concerts, Events & Rental Staging Solutions",
      description:
        "PixelWorld provides LED video walls, kiosks, and staging solutions for concerts, festivals, and live events across the UAE and Gulf region.",
      url: "https://www.pixelworld.ae/industry/concerts-events-rental-staging",
      publisher: {
        "@type": "Organization",
        name: "PixelWorld",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pixelworld.ae/assets/images/logo.png",
        },
      },
    },
    schemaData3: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What pixel resolution is ideal for LED screens used in concerts and events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For concerts, fine pixel pitch LED screens like P3 to P5 provide clarity for close-up viewing, while larger pixel pitches suit outdoor and wide-viewing distances.",
          },
        },
        {
          "@type": "Question",
          name: "How can I rent LED screens for a concert or event?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PixelWorld offers rental LED screens with full installation, support, and teardown for concerts, festivals, conferences, and live shows.",
          },
        },
        {
          "@type": "Question",
          name: "What types of LED screens are best for stage backdrops at events and concerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modular indoor LED video walls, curved LED screens, and transparent LED displays are commonly used for dynamic stage backdrops.",
          },
        },
        {
          "@type": "Question",
          name: "Can LED screens be used for live streaming at concerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, LED video walls can stream live camera feeds and video content, ensuring all attendees have a clear view of performers and event highlights.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of renting LED staging solutions for concerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Renting ensures flexibility, cost-efficiency, and professional setup with integrated sound, lighting, and visual systems tailored for each event.",
          },
        },
      ],
    },
  },
  {
    industryKey: "street-and-highway-outdoor-advertising",
    metaTitle: "Street & Highway Outdoor Advertising | PixelWorld UAE",
    metaDescription:
      "PixelWorld transforms street and highway outdoor advertising across the Gulf with dynamic LED billboards, smart kiosks, and Pixel Panda Technologies.",
    keywords: [
      "outdoor advertising",
      "LED billboards",
      "highway advertising UAE",
      "digital kiosks",
      "street advertising Gulf",
      "PixelWorld",
      "outdoor LED screens",
      "digital signage UAE",
    ],

    type: "website",
    ogDescription:
      "Discover PixelWorld's dynamic LED displays, smart kiosks, and data-driven software redefining outdoor advertising across the Gulf.",
    twitterDescription:
      "PixelWorld redefines street and highway advertising with LED billboards, kiosks & smart software across the UAE & Gulf.",
    image: images.streetTile,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971585321473",
        contactType: "sales",
        email: "sales@pixelworld.ae",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://x.com/Pixelworldfzc",
        "https://www.instagram.com/pixelworldfzc",
      ],
    },
  },
  {
    industryKey: "mall-advertising",
    metaTitle: "Mall Advertising Solutions | PixelWorld UAE",
    metaDescription:
      "PixelWorld transforms mall advertising with interactive digital kiosks, indoor LED screens, and outdoor LED displays across the UAE and Gulf.",
    keywords: [
      "mall advertising",
      "retail advertising UAE",
      "indoor LED screens",
      "outdoor LED mall displays",
      "digital kiosks shopping malls",
      "retail experience Gulf",
      "PixelWorld",
      "mall LED advertising",
    ],
    canonical: true,
    type: "website",
    ogDescription:
      "Reimagine shopping experiences with PixelWorld’s mall advertising: digital kiosks, indoor LEDs, outdoor displays & smart software across the Gulf.",
    twitterDescription:
      "PixelWorld combines digital kiosks, LED screens & smart software to transform malls into engaging retail experiences.",
    image: images.mallMain,
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PixelWorld",
      url: "https://www.pixelworld.ae",
      logo: "https://www.pixelworld.ae/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971585321473",
        contactType: "sales",
        email: "sales@pixelworld.ae",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573776366139",
        "https://x.com/Pixelworldfzc",
        "https://www.instagram.com/pixelworldfzc",
      ],
    },
  },
];

export default industryMetaData;
