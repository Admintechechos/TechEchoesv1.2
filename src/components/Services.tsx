import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Smartphone, TestTube, Headphones, FileCode, Book, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Custom web solutions that captivate and convert visitors.',
    details: [
      'Responsive web design for all devices',
      'UI/UX optimization',
      'E-commerce solutions',
      'CMS integration',
      'Performance optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform apps for modern businesses.',
    details: [
      'iOS and Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
      'Offline functionality'
    ],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80'
  },
  {
    icon: TestTube,
    title: 'Testing Services',
    description: 'Comprehensive QA and testing solutions for quality assurance.',
    details: [
      'Automated testing',
      'Manual testing',
      'Performance testing',
      'Security testing',
      'Cross-browser compatibility'
    ],
    image: 'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=500&q=80'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: '24/7 expert technical assistance for your IT needs.',
    details: [
      'Remote desktop support',
      'System maintenance',
      'Network troubleshooting',
      'Data backup solutions',
      'Security monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80'
  },
  {
    icon: FileCode,
    title: 'Medical Coding',
    description: 'Accurate medical coding services for healthcare providers.',
    details: [
      'ICD-10 coding',
      'CPT coding',
      'HCPCS coding',
      'Compliance review',
      'Audit support'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80'
  },
  {
    icon: Book,
    title: 'EPUB Conversion',
    description: 'Professional digital publishing and conversion services.',
    details: [
      'EPUB 2 & 3 conversion',
      'Fixed layout conversion',
      'Interactive elements',
      'DRM integration',
      'Quality assurance'
    ],
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80'
  }
];

const ServiceCard = ({ service, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
        <service.icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 mb-4">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></span>
              <span className="text-gray-600">{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
      >
        <span>{isExpanded ? 'View Less' : 'View More'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 ml-1" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-1" />
        )}
      </button>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;