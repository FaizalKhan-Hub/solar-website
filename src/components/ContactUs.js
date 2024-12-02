// pages/ContactUs.js
import React, { useState } from 'react';
import { send } from 'emailjs-com'; // Import the send function from EmailJS
import '../styles/ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Send email using EmailJS
  //   send('service_t1al5vm', 'template_whpanqi', formData, 'ghTTWC5wRIYeaVQsz')
  //     .then((response) => {
  //       console.log('SUCCESS:', response);
  //       setStatus('Your message has been sent!');
  //       setFormData({ name: '', email: '', message: '' }); // Clear form
  //     })
  //     .catch((err) => {
  //       console.error('FAILED:', err);
  //       setStatus('Failed to send message. Please try again.');
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailParams = {
      from_name: formData.name,
      // from_email: formData.email, // User's email
      reply_to: formData.email,   
      message: formData.message,
      // to_email: 'imfaizalkhan14@gmail.com' // Company email
    };
  
    send('service_t1al5vm', 'template_whpanqi', emailParams, 'ghTTWC5wRIYeaVQsz')
      .then((response) => {
        console.log('SUCCESS:', response);
        setStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((err) => {
        console.error('FAILED:', err);
        setStatus('Failed to send message. Please try again.');
      });
  };
  
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us through the details below or by filling out the form.</p>
      </div>

      {/* Google Maps Embed */}
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      {/* Company Contact Details */}
      <div className="contact-details">
        <h2>Company Contact Details</h2>
        <p><strong>Address:</strong> B Block Flat No 413 Shalimar Bagh Pundag Ranchi jharkhand, 834004</p>
        <p><strong>Email:</strong> energyharihar@gmail.com</p>
        <p><strong>Phone:</strong> +91 7779969333</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {status && <p>{status}</p>} {/* Display status message */}
      </div>
    </div>
  );
}

export default ContactUs;
