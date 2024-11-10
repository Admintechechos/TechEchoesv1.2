import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, Star } from 'lucide-react';

const stats = [
  {
    icon: Code,
    value: '50+',
    label: 'Projects Completed'
  },
  {
    icon: Users,
    value: '100+',
    label: 'Happy Clients'
  },
  {
    icon: Award,
    value: '3+',
    label: 'Years Experience'
  },
  {
    icon: Star,
    value: '100%',
    label: 'Client Satisfaction'
  }
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 px-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-white/20 rounded-lg">
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-white/80">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;