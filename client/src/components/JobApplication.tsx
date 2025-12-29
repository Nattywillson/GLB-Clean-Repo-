import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './JobApplication.css';

// Job roles array - easy to modify
const JOB_ROLES = [
  'Women\'s Crisis Support Counselor',
  'Community Outreach Coordinator',
  'Trauma-Informed Care Specialist',
  'Data Entry Clerk',
  'Finance Manager', 
  'Virtual Event Coordinator',
  'Personal Assistant',
  'Chat Support Assistant',
  'Volunteer Crisis Hotline Operator',
  'Women\'s Empowerment Workshop Facilitator',
  'Volunteer Mentor',
  'Student Intern - Social Impact'
];

interface JobApplicationProps {
  selectedPosition?: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ selectedPosition }) => {
  const [selectedRole, setSelectedRole] = useState(selectedPosition || '');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (isStudentPosition(selectedRole) && !isPersonalEmail(formData.email)) {
      newErrors.email = 'Student positions require personal email (gmail, yahoo, outlook, icloud, etc.). Educational emails (.edu, .k12, etc.) are not accepted.';
    }
    if (!selectedRole) newErrors.role = 'Please select a position';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if position is student-related
  const isStudentPosition = (role) => {
    return role && role.toLowerCase().includes('student');
  };

  // Check if email is personal (not educational)
  const isPersonalEmail = (email) => {
    const educationalDomains = [
      '.edu', '.k12', '.ac.', '.university', '.college', '.school',
      'student.', 'alumni.', '.edu.', '.ac.uk', '.ac.ca', '.ac.au'
    ];
    
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
      'aol.com', 'protonmail.com', 'zoho.com', 'mail.com', 'yandex.com'
    ];
    
    const emailLower = email.toLowerCase();
    
    // Check if it's a known personal domain
    const isPersonal = personalDomains.some(domain => emailLower.endsWith(domain));
    if (isPersonal) return true;
    
    // Check if it contains educational indicators
    const isEducational = educationalDomains.some(domain => emailLower.includes(domain));
    if (isEducational) return false;
    
    // If not clearly educational, allow it (benefit of doubt for other personal domains)
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  // Generate mailto link
  const generateMailto = () => {
    const subject = `Job Application – ${selectedRole} – ${formData.fullName}`;
    const body = `Full Name: ${formData.fullName}
Email: ${formData.email}
Position Applied For: ${selectedRole}
Message: ${formData.message}`;
    
    return `mailto:hr@globalwomenrising.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const formVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { 
      y: -2,
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="job-application">
      {/* Background */}
      <div className="job-application__background"></div>
      
      <motion.div 
        className="job-application__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="job-application__header">
          <h1>Join Our Team</h1>
          <p>Discover exciting opportunities to make a difference with Global Women Rising</p>
        </motion.div>

        {/* Job Roles */}
        <motion.div className="job-application__roles">
          <h2>Available Positions</h2>
          <div className="job-application__roles-grid">
            {JOB_ROLES.map((role, index) => (
              <motion.div
                key={role}
                className={`job-application__role-card ${selectedRole === role ? 'selected' : ''}`}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setSelectedRole(role)}
              >
                <div className="job-application__role-icon">💼</div>
                <h3>{role}</h3>
                <div className="job-application__role-check">
                  {selectedRole === role && <span>✓</span>}
                </div>
              </motion.div>
            ))}
          </div>
          {errors.role && <span className="job-application__error">{errors.role}</span>}
        </motion.div>

        {/* Application Form */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div 
              className="job-application__form-section"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h2>Application Details</h2>
              <form onSubmit={handleSubmit} className="job-application__form">
                <div className="job-application__form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className={errors.fullName ? 'error' : ''}
                  />
                  {errors.fullName && <span className="job-application__error">{errors.fullName}</span>}
                </div>

                <div className="job-application__form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={errors.email ? 'error' : ''}
                    placeholder={isStudentPosition(selectedRole) ? 'Use personal email (gmail, yahoo, outlook, etc.)' : 'Enter your email address'}
                  />
                  {errors.email && <span className="job-application__error">{errors.email}</span>}
                  {isStudentPosition(selectedRole) && (
                    <div className="job-application__email-notice">
                      <p>⚠️ Educational emails (.edu, .k12, student emails) will be automatically rejected. Please use a personal email address.</p>
                    </div>
                  )}
                </div>

                <div className="job-application__form-group">
                  <label>Selected Position</label>
                  <input
                    type="text"
                    value={selectedRole}
                    readOnly
                    className="readonly"
                  />
                </div>

                <div className="job-application__form-group">
                  <label>Why are you interested in this role?</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    placeholder="Tell us about your interest and relevant experience..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="job-application__submit-btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={!formData.fullName || !formData.email || !selectedRole}
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div 
              className="job-application__modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div 
                className="job-application__modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="job-application__modal-close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
                
                <div className="job-application__modal-content">
                  <div className="job-application__modal-icon">👩‍💼</div>
                  <h3>Thank You for Your Interest!</h3>
                  <p>Please email our HR team directly with your application details to continue the process.</p>
                  
                  <motion.a
                    href={generateMailto()}
                    className="job-application__email-btn"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    📧 Email HR Team
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default JobApplication;