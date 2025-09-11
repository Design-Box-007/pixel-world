import React, { useState } from 'react';
import ContactImage from '../assets/ContactImage.png';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    fullName: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobile,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSubmissionStatus('success');
                    setFormData({ fullName: '', email: '', mobile: '', message: '' });
                },
                (error) => {
                    console.error('FAILED...', error);
                    setSubmissionStatus('error');
                }
            );
    };

    return (
        <div className='contact'>
            <Helmet>
                <title>Contact Us - PixelWorld</title>
                <meta name="description" content="Get in touch with PixelWorld for any questions, quotes, or inquiries. Reach out to us today!" />
                <meta name="keywords" content="Contact, PixelWorld, Inquiries, Quotes, Questions" />
            </Helmet>
            <header className='contact-image-container'>
                <img src={ContactImage} className='contact-image' alt='Contact Us' width="100%" height="100%" />
            </header>
            <main className='contact-content'>
                <div className='contact-form-container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='contact-details d-flex flex-column justify-content-between h-100'>
                                <h1 className='contact-title'>Contact Us</h1>
                                <p className='contact-description'>Have questions, need a quote, or just want to say hello?<br /> Get in touch with us today</p>
                                <div className='hr-line' />
                                <div className='contact-email'>
                                    <h5>Email</h5>
                                    <p>Sales@pixelworld.com</p>
                                </div>
                                <div className='contact-phone'>
                                    <h5>Phone</h5>
                                    <p>+971 58 532 1473</p>
                                    <p>+971 55 513 1473</p>
                                </div>
                                <div className='contact-address'>
                                    <h5>Address</h5>
                                    <p>408, Appartment M02, Persia cluster,<br /> International city, Dubai - UAE</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <form className='contact-form' onSubmit={handleSubmit}>
                                <div>
                                    <h5 className='contact-subtitle'>Get in Touch</h5>
                                    <p className='contact-description'>Reach out today and take the first step towards a brighter display experience.</p>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input type='text' placeholder='Name'
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange} className='contact-input'
                                            required />
                                    </div>
                                    <div className='col-md-6'>
                                        <input type='email' placeholder='Email'
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange} className='contact-input'
                                            required />
                                    </div>
                                    <div className='col-md-12'>
                                        <input type='tel' placeholder='Mobile No'
                                            value={formData.mobile}
                                            name="mobile"
                                            onChange={handleChange} className='contact-input'
                                            required />
                                    </div>
                                    <div className='col-md-12'>
                                        <textarea type='text'
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange} rows={3} placeholder='How can we help you?'
                                            required className='contact-input' />
                                    </div>
                                </div>
                                <button type='submit' className='contact-button'>Submit</button>
                                {submissionStatus === 'success' && (
                                    <div className="text-success mt-2 rounded p-1">
                                        Form submitted successfully!
                                    </div>
                                )}
                                {submissionStatus === 'error' && (
                                    <div className="text-danger mt-2 rounded p-1">
                                        Failed to submit the form. Please try again later.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactUs;
