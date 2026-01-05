import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Users, Briefcase, MapPin, Clock, Filter } from 'lucide-react';
import JobApplication from '../components/JobApplication';
import Footer from '../components/Footer';

const jobPositions = [
  {
    id: 1,
    title: "Women's Crisis Support Counselor",
    department: "Support Services",
    type: "Full-time",
    location: "Remote/Hybrid",
    description: "💔 Be the voice of hope for women in their darkest moments. Provide emotional support and crisis intervention for women experiencing trauma, domestic violence, or mental health challenges.",
    requirements: ["Psychology/Social Work degree", "Crisis intervention training", "Empathy and active listening skills"],
    careerPath: "Counselor → Senior Counselor → Program Manager → Director of Support Services"
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    department: "Outreach",
    type: "Full-time",
    location: "Field Work",
    description: "🤝 Reach out to vulnerable women in communities, organize support groups, and be the bridge that connects them to life-changing resources.",
    requirements: ["Community development experience", "Cultural sensitivity", "Strong communication skills"],
    careerPath: "Coordinator → Senior Coordinator → Regional Manager → VP of Outreach"
  },
  {
    id: 3,
    title: "Trauma-Informed Care Specialist",
    department: "Healthcare",
    type: "Full-time",
    location: "On-site",
    description: "🩺 Heal hearts and minds by developing trauma-informed care programs for women survivors of abuse and violence. Your expertise saves lives.",
    requirements: ["Healthcare background", "Trauma-informed care certification", "Program development skills"],
    careerPath: "Specialist → Lead Specialist → Program Director → Chief Medical Officer"
  },
  {
    id: 4,
    title: "Data Entry Clerk",
    department: "Administration",
    type: "Part-time",
    location: "Remote",
    description: " Support our mission from behind the scenes by maintaining accurate records that help us track our impact on women's lives worldwide.",
    requirements: ["Attention to detail", "Computer proficiency", "Data accuracy skills"],
    careerPath: "Clerk → Senior Clerk → Data Manager → Operations Director"
  },
  {
    id: 5,
    title: "Finance Manager",
    department: "Finance",
    type: "Full-time",
    location: "Hybrid",
    description: " Ensure every dollar donated goes toward empowering women. Manage finances that directly fund life-changing programs and support services.",
    requirements: ["Finance/Accounting degree", "Budget management experience", "Financial analysis skills"],
    careerPath: "Manager → Senior Manager → Finance Director → Chief Financial Officer"
  },
  {
    id: 6,
    title: "Virtual Event Coordinator",
    department: "Events",
    type: "Part-time",
    location: "Remote",
    description: " Create inspiring virtual experiences that bring women together, share stories of triumph, and build a global community of support.",
    requirements: ["Event planning experience", "Virtual platform knowledge", "Creative thinking"],
    careerPath: "Coordinator → Senior Coordinator → Events Manager → Director of Events"
  },
  {
    id: 7,
    title: "Personal Assistant",
    department: "Administration",
    type: "Part-time",
    location: "Remote",
    description: " Be the organizational backbone that keeps our leadership focused on changing women's lives. Your support enables greater impact.",
    requirements: ["Administrative experience", "Excellent communication", "Time management skills"],
    careerPath: "Assistant → Senior Assistant → Executive Assistant → Operations Manager"
  },
  {
    id: 8,
    title: "Chat Support Assistant",
    department: "Support Services",
    type: "Part-time",
    location: "Remote",
    description: "💬 Be the first point of contact for women seeking help. Your compassionate responses can be the first step in someone's healing journey.",
    requirements: ["Customer service experience", "Empathetic communication", "Multi-tasking abilities"],
    careerPath: "Assistant → Senior Assistant → Support Manager → Director of Support"
  },
  {
    id: 9,
    title: "Volunteer Crisis Hotline Operator",
    department: "Volunteer",
    type: "Volunteer",
    location: "Remote",
    description: "📞 Answer the call when someone needs you most. Provide immediate emotional support to women in crisis and connect them with life-saving resources.",
    requirements: ["Compassionate nature", "Good listening skills", "Availability for training"],
    careerPath: "Volunteer → Team Lead → Volunteer Coordinator → Program Manager"
  },
  {
    id: 10,
    title: "Women's Empowerment Workshop Facilitator",
    department: "Programs",
    type: "Part-time",
    location: "Various Locations",
    description: " Lead transformational workshops on self-esteem, financial literacy, and life skills for women rebuilding their lives after trauma.",
    requirements: ["Workshop facilitation experience", "Women's issues knowledge", "Public speaking skills"],
    careerPath: "Facilitator → Senior Facilitator → Program Manager → Director of Programs"
  },
  {
    id: 11,
    title: "Volunteer Mentor",
    department: "Volunteer",
    type: "Volunteer",
    location: "Flexible",
    description: " Be the guiding light in someone's journey to healing. Provide one-on-one mentoring support to women rebuilding their lives after trauma or abuse.",
    requirements: ["Life experience", "Mentoring skills", "Commitment to helping others"],
    careerPath: "Volunteer Mentor → Senior Mentor → Mentor Coordinator → Program Director"
  },
  {
    id: 12,
    title: "Student Intern - Social Impact",
    department: "Student Programs",
    type: "Internship",
    location: "Remote/Hybrid",
    description: "🎓 Start your career by making a difference. Learn while contributing to programs that empower women globally. Perfect for students passionate about social change.",
    requirements: ["Currently enrolled student", "Passion for women's rights", "Eagerness to learn"],
    careerPath: "Intern → Junior Associate → Program Coordinator → Program Manager",
    isStudent: true
  }
];

const departments = ["All", "Support Services", "Outreach", "Healthcare", "Administration", "Finance", "Events", "Programs", "Volunteer", "Student Programs"];

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showApplication, setShowApplication] = useState(false);

  // Check URL for filter parameter
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && departments.includes(filterParam)) {
      setSelectedDepartment(filterParam);
    }
  }, []);

  const filteredJobs = selectedDepartment === "All" 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Back Button */}
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <div className="text-center text-white">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              src="/assets/glb-careers-logo.png" 
              alt="Global Women Rising Logo" 
              className="mx-auto mb-6 h-24 w-auto drop-shadow-lg"
            />
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              Join Our Mission
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
            >
               Every role here touches a life. Every application could be the start of someone's healing journey. 
              Join us in creating a world where every woman feels valued, supported, and empowered to rise. 
              <br /><br />
               <em>"Your compassion today becomes someone's hope tomorrow."</em>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto px-4 py-16">
        {!showApplication ? (
          <>
            {/* Department Filter */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Filter by Department</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedDepartment === dept
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Job Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        {job.isStudent && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                            <p className="text-sm text-blue-700 font-medium">
                              ⚠️ Student Application Notice: Please use your personal email address only. 
                              Do not use your school/university email for applications.
                            </p>
                          </div>
                        )}
                      </div>
                      {job.type === 'Volunteer' && (
                        <Heart className="w-6 h-6 text-pink-500 flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Career Path:</h4>
                      <p className="text-sm text-purple-600 bg-purple-50 p-3 rounded-lg">
                        {job.careerPath}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setShowApplication(false)}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Job Listings
              </button>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Apply for: {selectedJob?.title}
                </h2>
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {selectedJob?.department}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {selectedJob?.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {selectedJob?.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{selectedJob?.description}</p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Your Career Journey:</h3>
                  <p className="text-purple-700">{selectedJob?.careerPath}</p>
                </div>
              </div>
              
              <JobApplication selectedPosition={selectedJob?.title} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;