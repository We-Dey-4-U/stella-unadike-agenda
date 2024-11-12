import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import Blog from './Blog/Blog'; // Import the Blog component
import './contact.css';

const Contact = () => {
    return (
        <div>
            <Navbar /> {/* Add the Navbar here */}

            <div className="contact-form-page">
                <div className="contact-section">
                    <div className="container">
                        <div className="contact-content">
                            <div className="contact-form">
                                <h2>Contact Honourable To Book Appointment</h2>
                               
                                <form method="post" action="https://formspree.io/f/xpznvjqe">
                                    <label>
                                        Name:
                                        <input type="text" name="name" required />
                                    </label>
                                    
                                    <label>
                                        Email:
                                        <input type="email" name="email" required />
                                    </label>

                                    <label>
                                        Phone Number:
                                        <input type="tel" name="phone" />
                                    </label>

                                    <label>
                                        Subject:
                                        <select name="subject" required>
                                            <option value="">Select a Subject</option>
                                            <option value="Community Issue">Community Issue</option>
                                            <option value="Request for Support">Request for Support</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </label>

                                    <label>
                                        Message:
                                        <textarea name="message" required></textarea>
                                    </label>

                                    <label>
                                        Preferred Contact Method:
                                        <select name="contactMethod" required>
                                            <option value="">Select Preferred Contact Method</option>
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                            <option value="In Person">In Person</option>
                                        </select>
                                    </label>

                                    <label>
                                        Best Time to Contact:
                                        <input type="text" name="bestTime" placeholder="e.g., 9:00 AM - 5:00 PM" />
                                    </label>

                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insert Blog component here */}
            <div className="blog-section">
                <Blog /> {/* This will display the blog after the contact form */}
            </div>

            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default Contact;