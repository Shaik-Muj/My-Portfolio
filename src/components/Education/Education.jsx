import { motion } from 'framer-motion';
import './Education.scss';

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const education = [
    {
      id: 1,
      institution: 'Keshav Memorial Institute of Technology',
      degree: 'Bachelor of Technology - BTech, Computer Science',
      duration: '11/2022 - 08/2026',
      grade: 'GPA: 8.53 / 10.0',
    },
    {
      id: 2,
      institution: 'Narayana Junior College',
      degree: 'Intermediate (PUC)',
      duration: '06/2020 - 03/2022',
      grade: 'Percentage: 97.3',
    },
    {
      id: 3,
      institution: "St. Joseph's School, A.G. Palace",
      degree: '10th Grade (ICSE)',
      duration: '01/2010 - 03/2020',
      grade: 'Percentage: 85',
    },
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2>Education</h2>
        </motion.div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.div 
              key={item.id}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              custom={index}
            >
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h3>{item.institution}</h3>
                  <h4>{item.degree}</h4>
                  <div className="timeline-info">
                    <span className="duration">{item.duration}</span>
                    <span className="grade">{item.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
