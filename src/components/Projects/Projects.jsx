import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: 'ChatBot for Medical Queries',
      description: 'Created an advanced medical query chatbot integrating Natural Language Processing, Machine Learning, and Web Development.',
      details: [
        'Leveraged a pre-trained GPT-2 model alongside a Retrieval-Augmented Generation (RAG) database powered by Facebook AI Similarity Search',
        'Developed a user-centric website to handle queries efficiently and fine-tuned the model for superior data accuracy',
        'Increased chatbot response accuracy by 30% using RAG framework for medical queries'
      ],      technologies: ['Python', 'Flask', 'TensorFlow', 'React.js', 'Hugging Face', 'MERN'],
      category: 'ai',
      image: 'medical-chatbot.jpg',
      github: 'https://github.com/Shaik-Muj/ChatBot-for-Medical-Queries'
    },
    {
      id: 2,
      title: 'Miniature ChatBot Voice Assistant',
      description: 'Developed an AI-integrated IoT project focused on creating a multifunctional miniature handheld device.',
      details: [
        'Project provided AI chatbot support, enabling seamless query response generation via embedded AI APIs',
        'Featured voice-assisted home automation capabilities',
        'Utilized the ESP32 microcontroller\'s Wi-Fi and Bluetooth functionalities for reliable connectivity'
      ],      technologies: ['ESP32', 'MicroPython', 'OpenAI API', 'Vosk', 'eSpeak'],
      category: 'iot',
      image: 'voice-assistant.jpg',
      github: 'https://github.com/Shaik-Muj/Miniature_ChatGPT'
    },
    {
      id: 3,
      title: 'AI - Brain',
      description: 'A full-stack AI-powered platform that enables users to analyze and interact with content from PDFs, YouTube videos, and images.',
      details: [
        'Features a modern React/TypeScript frontend and a FastAPI backend',
        'Offers robust PDF chat, video summarization, and multimodal AI tools',
        '80% faster document processing and 85% reduction in response latency'
      ],      technologies: ['React', 'TypeScript', 'FastAPI', 'PyMuPDF', 'LangChain', 'Azure OpenAI'],
      category: 'ai',
      image: 'ai-brain.jpg',
      github: 'https://github.com/Shaik-Muj/AI-Brain'
    },
    {
      id: 4,
      title: 'FYI - For Your Information',
      description: 'A Python-based news platform that aggregates, summarizes, and analyzes news articles, featuring fake news detection and video news capabilities.',
      details: [
        'Designed for efficient information consumption and credibility assessment',
        'Uses custom summarization with NLTK and sentence scoring',
        'Led this project increasing news summarization accuracy by 25%'
      ],      technologies: ['Python', 'NLTK', 'Streamlit', 'React.js', 'Facebook BART', 'Faster-Whisper'],
      category: 'web',
      image: 'fyi-news.jpg',
      github: 'https://github.com/Shaik-Muj/FYI.'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Dev' },
    { id: 'iot', label: 'IoT' }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2>Projects</h2>
        </motion.div>
        
        <motion.div 
          className="project-tabs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={index}
            >
              <div className="project-image">
                <div className="placeholder-image"></div>                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
