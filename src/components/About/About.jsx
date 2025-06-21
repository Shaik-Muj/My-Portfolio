import { motion } from 'framer-motion';
import { FaPython, FaReact, FaAws, FaMicrochip, FaBrain, FaMicrosoft } from 'react-icons/fa';
import { SiTensorflow, SiJavascript, SiMongodb, SiFlask, SiHuggingface } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbBrandOpenai, TbBrandAzure } from 'react-icons/tb';
import './About.scss';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'PyTorch', icon: <FaPython /> },
    { name: 'LLMs', icon: <FaBrain /> },
    { name: 'GenAI', icon: <GiArtificialIntelligence /> },
    { name: 'CNNs', icon: <FaBrain /> },
    { name: 'RNNs', icon: <FaBrain /> },    { name: 'Hugging Face', icon: <SiHuggingface /> },
    { name: 'OpenAI API', icon: <TbBrandOpenai /> },
    { name: 'Azure', icon: <TbBrandAzure /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'NLTK', icon: <FaPython /> },
    { name: 'IoT', icon: <FaMicrochip /> },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2>About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <p>
              I'm an aspiring AI/ML engineer and a current student with a strong interest in deep learning, 
              computer vision, and natural language processing. I've worked on building and deploying 
              machine learning models using Python, TensorFlow, and PyTorch, and enjoy applying data-driven 
              approaches to real-world problems.
            </p>
            <p>
              With a solid foundation in programming (Python, Java, C), I'm eager to keep learning and 
              contribute to meaningful projects in AI and machine learning. My passion lies in creating 
              intelligent systems that can understand, learn, and assist in solving complex problems.
            </p>
          </motion.div>
          
          <motion.div 
            className="skills-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-item"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
