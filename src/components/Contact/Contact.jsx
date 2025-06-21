import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // This is where you would usually set up EmailJS with your actual service ID, template ID, and public key
    // For now, we'll just simulate a successful submission
    try {
      // Example EmailJS integration (uncomment and add your actual IDs when ready)
      await emailjs.sendForm('service_n2g2fts', 'template_gfvf7fl', form.current, 'zclYw6R5G2k1H6NL_');
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 9701168398',
      link: 'tel:+919701168398',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'shaik.mujtaba.hussain08@gmail.com',
      link: 'mailto:shaik.mujtaba.hussain08@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Hyderabad, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2>Contact</h2>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3>Let's Connect</h3>
            <p>Whether you have a question, project idea, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible.</p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    {item.icon}
                  </div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <a href={item.link}>{item.content}</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            {formStatus.submitted && formStatus.success ? (
              <div className="form-success-message">
                <h3>Thank You!</h3>
                <p>{formStatus.message}</p>
                <button 
                  onClick={() => setFormStatus({...formStatus, submitted: false})}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                {formStatus.error && (
                  <div className="error-message">{formStatus.message}</div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
