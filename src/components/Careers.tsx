import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    location: 'Remote / On-site',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team.'
  },
  {
    title: 'QA Engineer',
    type: 'Full-time',
    location: 'On-site',
    description: 'Join our quality assurance team to ensure the highest standards in our deliverables.'
  }
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600">
            Build your career with innovation and growth
          </p>
        </motion.div>

        <div className="grid gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                      {position.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {position.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    Apply Now
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;