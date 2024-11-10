import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Stats from './Stats';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-orange-400 to-purple-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -top-20 -left-20 blur-3xl"></div>
                <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full -bottom-20 -right-20 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Removed the logo (motion.img) */}

                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
                        Welcome to Techechos Innovation
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8 text-white/90 font-light">
                        Innovate • Collaborate • Elevate
                    </p>

                    {/* Featured Project Images */}
                    <div className="flex gap-4 mb-12 overflow-hidden">
                        <motion.img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
                            alt="Project 1"
                            className="w-48 h-32 object-cover rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        />
                        <motion.img
                            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&q=80"
                            alt="Project 2"
                            className="w-48 h-32 object-cover rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        />
                        <motion.img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
                            alt="Project 3"
                            className="w-48 h-32 object-cover rounded-lg shadow-lg hidden md:block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="#services"
                            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors"
                        >
                            Explore Our Services
                        </a>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <Stats />

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-white" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
