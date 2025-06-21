import { motion } from 'framer-motion';
import './Certifications.scss';
import '../../styles/certificate-placeholders.css';

const Certifications = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const certificates = [
    {
      id: 1,
      title: 'Generative AI and LLMs: Architecture and Data Preparation',
      issuer: 'IBM',
      date: 'May 2025',
      image: 'ibm-generative-ai.jpg',
      className: 'ibm'
    },
    {
      id: 2,
      title: 'Introduction to AWS SDK for Python',
      issuer: 'CodeSignal',
      date: 'April 2025',
      image: 'codesignal-aws-sdk.jpg',
      className: 'codesignal'
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      date: 'March 2025',
      image: 'ibm-machine-learning.jpg',
      className: 'ibm'
    },
    {
      id: 4,
      title: 'Mastering Amazon S3 with AWS SDK for Python',
      issuer: 'CodeSignal',
      date: 'February 2025',
      image: 'codesignal-amazon-s3.jpg',
      className: 'codesignal'
    },
    {
      id: 5,
      title: 'React Basics',
      issuer: 'Meta',
      date: 'January 2025',
      image: 'meta-react-basics.jpg',
      className: 'meta'
    },
    {
      id: 6,
      title: 'Cloud Computing Fundamentals',
      issuer: 'IBM',
      date: 'December 2024',
      image: 'ibm-cloud-computing.jpg',
      className: 'ibm'
    },
    {
      id: 7,
      title: 'User Experience Design Fundamentals',
      issuer: 'IBM',
      date: 'November 2024',
      image: 'ibm-ux-design.jpg',
      className: 'ibm'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2>Certifications</h2>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >              {/* Try to load actual certificate image first, fallback to placeholder if image doesn't exist */}
              <div className="certificate-image-container">                <img 
                  src={`./src/assets/certificates/${cert.image}`} 
                  alt={cert.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  className="certificate-image"
                />
                <div className={`certificate-placeholder ${cert.className}`} style={{ display: 'none' }}>
                  <div className="logo"></div>
                  <div className="title">{cert.title}</div>
                  <div className="issuer">{cert.issuer}</div>
                  <div className="date">{cert.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
