import React from 'react';
import { IoExpand, IoPeopleOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { CiDiscount1 } from 'react-icons/ci';
import { VscTools } from 'react-icons/vsc';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';

const OccasionReady = () => {
  return (
    <section className='occasionReady py-5'>
      <h1 className='occasionReady-title'>
        From Setup to Support, <br /> We've Got Your Occasions Covered
      </h1>
      <h2 className='occasionReady-description'>
        We deliver cutting-edge LED display solutions with seamless service from concept to completion.
      </h2>
      <div className='row my-5'>
        {/* Scalable & Customized Solutions */}
        <div className='col-md-6 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>Scalable & Customized Solutions</h3>
              <IoExpand size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Need something unique? We offer custom LED display setups tailored to your event’s theme or special requirements.
            </p>
          </div>
        </div>

        {/* 24/7 Technical Support */}
        <div className='col-md-6 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>24/7 Technical Support</h3>
              <LuClock3 size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Our specialists are on standby to troubleshoot any issues, minimizing disruptions and maximizing impact.
            </p>
          </div>
        </div>

        {/* LED Display Rentals */}
        <div className='col-md-4 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>LED Display Rentals</h3>
              <CiDiscount1 size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Choose from a wide range of high-quality LED displays tailored for expos, summits, and events of any scale.
            </p>
          </div>
        </div>

        {/* Custom Installation */}
        <div className='col-md-4 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>Custom Installation</h3>
              <VscTools size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Our expert team ensures seamless integration and installation of LED screens, customized to your venue and requirements.
            </p>
          </div>
        </div>

        {/* On-Site Support */}
        <div className='col-md-4 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>On-Site Support</h3>
              <IoPeopleOutline size={24} />
            </div>
            <p className='occasionReady-card-description'>
              From setup to breakdown, we provide full technical support to keep your visuals running smoothly.
            </p>
          </div>
        </div>

        {/* Maintenance & Upgrades */}
        <div className='col-md-6 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>Maintenance & Upgrades</h3>
              <IoSettingsOutline size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Keep your LED displays in top condition with our regular maintenance and upgrade services. We ensure your equipment is always performing at its best, with the latest technology.
            </p>
          </div>
        </div>

        {/* Event Setup & Configuration */}
        <div className='col-md-6 mb-4'>
          <div className='occasionReady-card'>
            <div className='d-flex justify-content-between align-items-center text-white'>
              <h3 className='occasionReady-card-title'>Event Setup & Configuration</h3>
              <HiOutlineGlobeAlt size={24} />
            </div>
            <p className='occasionReady-card-description'>
              Our experienced team will handle the full installation and configuration of your LED displays, ensuring optimal functionalities and seamless integration with your event environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccasionReady;
