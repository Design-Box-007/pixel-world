import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosMore } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FAQ = ({ showAll = true }) => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([
    {
      question: 'What is an LED Screen and How Does It Work?',
      answer: `An LED screen is a display technology using light-emitting diodes (LEDs) to produce vibrant, high-resolution content. This technology is used in digital signage, video walls, and outdoor displays for dynamic visuals and enhanced clarity.`,
      isOpen: false,
    },
    {
      question: 'What Are the Different Types of LED Display Screens?',
      answer: `
        <ul>
          <li><b>Indoor LED Screens:</b> Ideal for indoor environments with excellent resolution and brightness.</li>
          <li><b>Outdoor LED Screens:</b> Designed to endure outdoor elements with high brightness and durability.</li>
          <li><b>Flexible LED Screens:</b> Moldable screens perfect for curved surfaces or custom installations.</li>
          <li><b>Mesh LED Screens:</b> Lightweight and transparent, often used for large-scale outdoor displays.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'How Do I Choose the Right LED Screen for My Needs?',
      answer: `Consider factors like screen size, pixel pitch, resolution, and the environment (indoor or outdoor). Your choice should be based on the content you plan to display, viewing distance, and space available. We can help you select the best screen for your specific requirements.`,
      isOpen: false,
    },
    {
      question: 'How Long Do LED Screens Last?',
      answer: `LED screens typically have a lifespan of 50,000 to 100,000 hours, depending on usage and maintenance. This translates to 5-10 years of reliable service, making them an excellent long-term investment.`,
      isOpen: false,
    },
    {
      question: 'Can LED Screens Be Used for Digital Signage?',
      answer: `Yes, LED digital signage is one of the most popular applications for advertisements, wayfinding, promotions, and real-time updates. They are highly effective for use in malls, airports, corporate offices, and event venues.`,
      isOpen: false,
    },
    {
      question: 'What is Pixel Pitch and Why is it Important?',
      answer: `Pixel pitch refers to the distance between the centers of adjacent pixels. A smaller pixel pitch means higher resolution, making the screen ideal for close-up viewing. It plays a crucial role in determining visual sharpness and clarity.`,
      isOpen: false,
    },
    {
      question: 'How Do I Control and Manage Content on an LED Wall?',
      answer: `Content on LED video walls can be managed through a content management system (CMS). This allows you to remotely upload, schedule, and manage content for seamless updates and real-time changes.`,
      isOpen: false,
    },
    {
      question: 'What Are the Applications of LED Screens?',
      answer: `
        <ul>
          <li>Retail displays for promotions and branding.</li>
          <li>Event and exhibition screens for dynamic backdrops.</li>
          <li>Corporate offices for presentations and digital signage.</li>
          <li>Outdoor advertising and billboards.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'What Are the Benefits of Using Indoor LED Screens?',
      answer: `
        <ul>
          <li>Energy efficiency compared to traditional displays.</li>
          <li>Low maintenance requirements.</li>
          <li>High resolution for sharp, clear visuals.</li>
          <li>Long lifespan, providing value over time.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'Can I Use LED Screens for Interactive Displays?',
      answer: `Yes, many LED screens can be equipped with touchscreen functionality or integrated with gesture control, creating engaging interactive displays for retail environments, exhibitions, and wayfinding systems.`,
      isOpen: false,
    },
    {
      question: 'What Are the Specifications of Indoor LED Video Walls?',
      answer: `
        <ul>
          <li>Pixel pitch between P1.5 and P4.0.</li>
          <li>Brightness of 1000-1500 nits.</li>
          <li>Wide viewing angles for optimal visibility in large spaces.</li>
          <li>High refresh rates for smooth video playback.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'Why Choose LED Screens Over LCD Screens?',
      answer: `LED screens offer superior brightness, contrast, and energy efficiency compared to LCD screens. Their durability and long lifespan make them ideal for outdoor environments and large-scale video walls.`,
      isOpen: false,
    },
    {
      question: 'How Big Can LED Screens Be?',
      answer: `LED screens range in size from compact digital signage displays (32 inches) to massive video walls that can span entire walls in stadiums, shopping malls, and event spaces. Custom sizes can also be created for specific installations.`,
      isOpen: false,
    },
    {
      question: 'How to Maintain an Indoor LED Screen?',
      answer: `
        <ul>
          <li>Cleaning the screen regularly.</li>
          <li>Monitoring for dead pixels.</li>
          <li>Checking software updates and ensuring proper ventilation for heat dissipation.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'What Is the Cost of LED Screen Video Walls?',
      answer: `The cost of an LED video wall varies based on factors like size, resolution, and installation complexity. Prices can range from a few thousand dollars for smaller, basic setups to tens of thousands for large-scale, high-resolution video walls.`,
      isOpen: false,
    },
    {
      question: 'How Energy-Efficient Are LED Screens?',
      answer: `LED screens are highly energy-efficient compared to traditional display technologies like LCD and plasma. They consume less power while providing bright, vibrant displays, which makes them ideal for sustainability initiatives and reducing operational costs.`,
      isOpen: false,
    },
    {
      question: 'What Are the Advantages of Mesh LED Screens?',
      answer: `Mesh LED screens are lightweight, transparent, and ideal for large-scale outdoor advertising on building facades. Their flexibility and transparency make them perfect for dynamic content while still allowing natural light and airflow through the display.`,
      isOpen: false,
    },
    {
      question: 'Can LED Video Walls Enhance Audience Engagement?',
      answer: `Absolutely! LED video walls provide a stunning visual experience that grabs attention with their large size, vibrant colors, and seamless display. They are effective in event settings, corporate presentations, and advertising, where engagement is key.`,
      isOpen: false,
    },
    {
      question: 'What Are the Different Types of LED Screens Available?',
      answer: `
        <ul>
          <li><b>Indoor LED screens:</b> For high-resolution displays in controlled lighting conditions.</li>
          <li><b>Outdoor LED screens:</b> Built to withstand harsh weather and offer high brightness for visibility in direct sunlight.</li>
          <li><b>Flexible LED screens:</b> Customizable for unique, curved, or irregular installations.</li>
          <li><b>Mesh LED screens:</b> Transparent and ideal for large outdoor displays, blending with the environment.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'What Are the Features of Outdoor LED Screens?',
      answer: `
        <ul>
          <li>High brightness for clear visibility in direct sunlight.</li>
          <li>Weather resistance against rain, dust, and extreme temperatures.</li>
          <li>Durability to function for extended periods in outdoor environments.</li>
        </ul>`,
      isOpen: false,
    },
    {
      question: 'How Do I Manage LED Display Content Remotely?',
      answer: `Managing content on an LED display can be done remotely through a content management system (CMS). This allows you to upload, update, and schedule content from anywhere, making it convenient for digital signage networks and advertising campaigns.`,
      isOpen: false,
    },
    {
      question: 'How Are Flexible LED Screens Used?',
      answer: `Flexible LED screens are often used in unique architectural installations, curved surfaces, or unconventional spaces where traditional flat screens wouldn’t fit. These screens are also popular in event staging and creative advertising setups.`,
      isOpen: false,
    },
    {
      question: 'What Are the Best Use Cases for LED Screens in Events?',
      answer: `LED screens are perfect for creating stunning visual backdrops, interactive displays, and live video feeds at events like conferences, exhibitions, concerts, and product launches, elevating the experience for attendees.`,
      isOpen: false,
    },
  ]);

  const [visibleCount, setVisibleCount] = useState(5);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  const handleNavigateToFAQPage = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scroll animation
    });
    navigate('/faq'); // Navigate to the FAQ page
  };


  return (
    <div className="faq" id="faq">
      {showAll &&
        <Helmet>
          <title>Frequently Asked Questions | LED Display Solutions</title>
          <meta
            name="description"
            content="Find answers to common questions about LED screens, video walls, digital signage, and more. Learn about the technology and applications of LED displays."
          />
          <meta
            name="keywords"
            content="LED Screens, Digital Signage, LED Video Walls, FAQ, LED Display Technology"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.pixelworld.ae/faq" />

          {/* Structured Data (FAQ schema) */}
          <script type="application/ld+json">
            {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an LED Screen and How Does It Work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An LED screen is a display technology using light-emitting diodes (LEDs) to produce vibrant, high-resolution content. This technology is used in digital signage, video walls, and outdoor displays for dynamic visuals and enhanced clarity."
                }
              },
              {
                "@type": "Question",
                "name": "What Are the Different Types of LED Display Screens?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Indoor LED Screens, Outdoor LED Screens, Flexible LED Screens, Mesh LED Screens"
                }
              }
            ]
          }
        `}
          </script>
        </Helmet>
      }
      {showAll ?
        <h1 className="faq-title">Frequently Asked Questions</h1> :
        <h2 className="faq-title">Frequently Asked Questions</h2>
      }
      <div className="faq-list">
        {(showAll ? faqs : faqs.slice(0, visibleCount)).map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="faq-question">{faq.question}</h2> {/* Use heading tag for SEO */}
              <div className="text-primary">
                {!faq.isOpen ? (
                  <IoIosArrowDown size={24} fontWeight={500} />
                ) : (
                  <IoIosArrowUp size={24} fontWeight={500} />
                )}
              </div>
            </div>
            {faq.isOpen && (
              <div
                className="faq-answer"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
      {!showAll && visibleCount < faqs.length && (
        <div className="d-flex justify-content-end">
          <button className="button-one" onClick={handleNavigateToFAQPage}>
            Go to FAQ Page <IoIosMore />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;
