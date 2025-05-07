import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipients = ['O191036@rguktong.ac.in', 'o190479@rguktong.ac.in', 'o190856@rguktong.ac.in','o190859@rguktong.ac.in','o190855@rguktong.ac.ins']; // Add all recipient emails here
    const mailtoLink = `mailto:${recipients.join(',')}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className='contact-container'>
        <h2>Contact Us</h2>
        <p>If you have any doubts regarding schedule or player who are playing and anything regarding game then you can contact our PET sir Bhaskar.</p>
        <p>PET Sir: Bhaskar</p>
        <p>Phone Number: 9553234304</p>
        {/* Block for sending message with user details */}
        <p>If you have any technical issues on this application then you can send a message.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br /><br />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
          ></textarea><br /><br />
          <input type="submit" value="Send Message" />
        </form>
      </div>

      <hr />

      <div className='about-section'>
        <h2>About Us</h2>
        <p>If there is any technical issues in this application then you can contact us.</p>
        <ol>
          <li>Akhila - o190479@rguktong.ac.in</li>
          <li>Rafi - o190856@rguktong.ac.in</li>
          <li>Sravya - o191036@rguktong.ac.in</li>
          <li>Anjaneyulu - o190859@rguktong.ac.in</li>
          <li>Sai Naik - o190855@rguktong.ac.in</li>
        </ol>
      </div>
    </div>
  );
}

export default Help;
