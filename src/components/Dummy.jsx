const cardData = [
  {
    // title: 'Client-Centric',
    description: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier brings award-winning LED solutions to the LED industry by delivering high-quality, customizable, and durable products. As one of the leading companies in the UAE with international recognition, we specialize in the production and installation of indoor and outdoor LED screens and the supply of rental and staging products.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a solutions-oriented approach, we continuously innovate and develop new products based on our customers' needs, regardless of the project size. Recognized with multiple awards, our one-of-a-kind and imaginative visual projects cater to a wide range of clients, amplifying creativity while ensuring cost-effective and reliable solutions.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br/>
<br/><strong>Our Expertise</strong><br/><br/>
At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
<br/>•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
<br/>•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
<br/>•	LED Signage: Digital signage for information, food menus, and shop signage.
<br/>•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
<br/>•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
<br/>•	Transparent LED: Innovative displays for retail and creative environments.
<br/>•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br/>
<br/><strong>Services</strong><br/>

<br/><b>Indoor Solutions</b><br/>
•	Retail Indoor LED
<br/>•	LED for Schools
<br/>•	LED Screens for Meeting Rooms
<br/>•	Flexible LED
<br/>•	90 and 360-degree LED Screens
<br/>•	Entrance Frame LED Screens
<br/>•	Digital Signage for Information
<br/>•	Shop Signage LED
<br/>•	LED for Corporate Offices
<br/>
<b>
Outdoor Solutions</b>
<br/>•	Outdoor LED Screens for Billboards
<br/>•	Digital Signage for Food Menus
<br/>•	Outdoor Mesh LED
<br/>•	Outdoor Net LED<br/>
<b>
Specialty LED Solutions</b><br/>
•	LED Digital Posters
<br/>•	3D LED Stands
<br/>•	Floor LEDs
<br/>•	Digital Kiosks
<br/>•	Ceiling LEDs
<br/>•	Creative Retail LED Screens
<br/>•	Transparent LEDs for Retail
<br/>
<br/>
Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology.`,
  },
  // {
  //     title: 'Reliability',
  //     description: 'Ensuring seamless performance and timely execution for every project.',
  // },
  // {
  //     title: 'Quality',
  //     description: 'Committed to providing top-tier products and exceptional service.',
  // },
];
<div className="innovateDisplay">
  <div className="d-flex">
    <h2>About Us</h2>
    {/* <img src={innovateDisplayImage} alt='Innovate Display' className='innovateDisplay-image' width="100%" height="100%" /> */}
  </div>
  <div className="">
    {/* <h1 className='innovateDisplay-title'>
                        Your Trusted Partner in Every <br /> Display Innovation
                    </h1> */}
    {/* <div className='innovateDisplay-description'>We deliver cutting-edge LED display solutions with seamless service from concept to completion.</div> */}
    <div className="row">
      {cardData.map((card, index) => (
        <div key={index} className="col-lg-8  mb-2">
          {/* <div className='innovateDisplay-card'> */}
          {/* <div className='innovateDisplay-card-title'>{card.title}</div> */}
          {/* <h2 className='innovateDisplay-card-description' dangerouslySetInnerHTML={{ __html: card?.description }} />
           */}
          <h2 className="innovateDisplay-card-description">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dubai LED Screen Supplier offers
            premium-quality indoor and outdoor LED screens along with digital
            advertising solutions for to your needs. We provide customizable LED
            video walls at affordable prices, ensuring durable products that
            meet both installation and rental requirements. As a leading LED
            screen supplier in the UAE, recognized internationally, we handle
            projects of all sizes, from small businesses to large enterprises.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Pixelworld, we specialize in
            delivering creative, cost-effective LED screen solutions for various
            applications, including LED video walls for exhibitions, affordable
            LED displays for trade shows, and outdoor LED screens for
            advertising in Dubai. Our award-winning products include
            high-resolution LED screen rentals for events and stages, permanent
            installations, and custom LED screen designs.
            <br />
            <br />
            Whether you're a global company or a local business looking for
            cheap but high-quality LED screens in UAE, we ensure your brand
            connects with your audience through visually stunning LED displays.
            With our affordable digital signage in Dubai, you can enhance your
            marketing efforts and achieve outstanding results.
            <br />
            <br /> Choose Pixelworld for reliable, budget-friendly LED
            solutions, including LED screens for events in UAE, custom LED walls
            for conferences, LED video wall, LED signage for retail stores for
            your shop front sign and indoor LED screens for retail stores. Let
            us help you elevate your brand with top-rated, energy-efficient LED
            screens that offer exceptional quality and performance.
            <br />
            <br />
            "Are you still looking for LED screens in Dubai? Please contact us
            to receive the best quote and discover the perfect LED screen
            solution for your business."
            {/* <b>Indoor LED Screens:</b> High-quality displays for retail, schools, offices, and meeting rooms.<br />
                                        <br /><b>Outdoor LED Screens:</b> Durable screens for billboards and large ads.<br />
                                        <br /><b>LED Signage:</b> Digital signage for menus, information, and store signs.<br />
                                        <br /><b>Home & Office LED Solutions:</b> Stylish and affordable LED screens for homes and offices.<br />
                                        <br /><b>Custom LED Walls:</b> Flexible and unique LED designs, including 90° and 360° screens.<br />
                                        <br /><b>Transparent LED:</b> Innovative displays for retail and creative spaces.<br />
                                        <br /><b>3D and Floor LEDs:</b> Cutting-edge technology for immersive experiences.<br /> */}
            {/* <br /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Pixelworld, your ultimate destination for innovative LED screen advertising solutions that transform how brands connect with their audiences. Whether you're a global enterprise or a local business, we bring unparalleled expertise in LED screen technology, creating visually stunning displays that leave a lasting impact.<br /> */}
            {/* <br /><strong>Our Expertise</strong><br /><br />
                                        At Pixelworld, we specialize in state-of-the-art LED screen technology designed to deliver breathtaking visuals that captivate audiences.
                                        <br />•	Indoor LED Screens: High-definition displays for retail, schools, meeting rooms, and corporate offices.
                                        <br />•	Outdoor LED Screens: Durable and weather-resistant screens for billboards and large-scale advertisements.
                                        <br />•	LED Signage: Digital signage for information, food menus, and shop signage.
                                        <br />•	Home & Office LED Solutions: Affordable, sleek LED screens for homes and offices.
                                        <br />•	Custom LED Walls: Unique designs, including flexible, 90-degree, and 360-degree screens.
                                        <br />•	Transparent LED: Innovative displays for retail and creative environments.
                                        <br />•	3D and Floor LEDs: Cutting-edge technology for immersive experiences.<br />
                                        <br /><strong>Services</strong><br /><br />
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className=' bg-white p-3 shadow rounded h-100'>
                                                <b>Indoor Solutions</b><br /><br />
                                                •	Retail Indoor LED
                                                <br />•	LED for Schools
                                                <br />•	LED Screens for Meeting Rooms
                                                <br />•	Flexible LED
                                                <br />•	90 and 360-degree LED Screens
                                                <br />•	Entrance Frame LED Screens
                                                <br />•	Digital Signage for Information
                                                <br />•	Shop Signage LED
                                                <br />•	LED for Corporate Offices
                                                <br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Outdoor Solutions</b><br />
                                                <br />•	Outdoor LED Screens for Billboards
                                                <br />•	Digital Signage for Food Menus
                                                <br />•	Outdoor Mesh LED
                                                <br />•	Outdoor Net LED<br />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className=' bg-white p-3 shadow rounded h-100'>

                                                <b>
                                                    Specialty LED Solutions</b><br /><br />
                                                •	LED Digital Posters
                                                <br />•	3D LED Stands
                                                <br />•	Floor LEDs
                                                <br />•	Digital Kiosks
                                                <br />•	Ceiling LEDs
                                                <br />•	Creative Retail LED Screens
                                                <br />•	Transparent LEDs for Retail
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        Choose Pixelworld for your advertising needs and experience the perfect blend of innovation, artistry, and engineering. With every detail of your campaign carefully crafted, we ensure your brand is the center of attention, delivering unforgettable results with cutting-edge LED technology. */}
          </h2>
          {/* </div> */}
        </div>
      ))}
      {/* <div className="col-lg-4">
        <div className="explore-image-container">
          <img
            src={AboutUsHome}
            alt="About Us Home"
            className="explore-image"
            width="100%"
            height="100%"
          />
        </div>
      </div> */}
    </div>
  </div>
</div>;
