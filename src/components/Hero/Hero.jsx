import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >            <h1>SHAIK MUJTABA HUSSAIN</h1>
            <h2 className="profession">
              <TypeAnimation
                sequence={[
                  'Machine Learning',
                  1000,
                  'Artificial Intelligence',
                  1000,
                  'Full Stack Development',
                  1000,
                  'Cloud Computing',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p>I'm an aspiring AI/ML engineer with a strong interest in deep learning, computer vision, and natural language processing.</p>
              <div className="hero-buttons">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
            
            <div className="social-links">
              <motion.a 
                href="https://www.linkedin.com/in/shaik-mujtaba-hussain-52b5342b1/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0077b5" }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com/Shaik-Muj" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#333" }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="mailto:shaik.mujtaba.hussain08@gmail.com"
                whileHover={{ scale: 1.2, color: "#ea4335" }}
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              {/* You can add a personal image here */}
              <div className="placeholder-image">
                <span>AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="scroll-down">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          <a href="#about">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
