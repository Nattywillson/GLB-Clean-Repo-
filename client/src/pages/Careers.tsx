import React from 'react';
import JobApplication from '../components/JobApplication';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with women smiling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with logo */}
        <div className="text-center mb-12">
          <img 
            src="/assets/glb-careers-logo.png" 
            alt="Global Women Rising Logo" 
            className="mx-auto mb-6 h-20 w-auto"
          />
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to empower women leaders worldwide. We're looking for passionate individuals who share our vision.
          </p>
        </div>
        
        <JobApplication />
      </div>
    </div>
  );
};

export default Careers;