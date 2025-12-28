import React from 'react';
import JobApplication from '../components/JobApplication';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Join Our Team</h1>
        <JobApplication />
      </div>
    </div>
  );
};

export default Careers;