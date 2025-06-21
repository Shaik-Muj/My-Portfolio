import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
    { id: 'certifications', text: 'Certifications' },
    { id: 'contact', text: 'Contact' }
  ];
  
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shaik-mujtaba-hussain-52b5342b1/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <FaEnvelope />, url: 'mailto:shaik.mujtaba.hussain08@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>SHAIK MUJTABA HUSSAIN</h3>
              <p>Artificial Intelligence and Machine Learning Engineer</p>
              
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link 
                      to={link.id} 
                      smooth={true} 
                      duration={500} 
                      offset={-70}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <span>Phone:</span> +91 9701168398
                </li>
                <li>
                  <span>Email:</span> shaik.mujtaba.hussain08@gmail.com
                </li>
                <li>
                  <span>Location:</span> Hyderabad, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Shaik Mujtaba Hussain | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
