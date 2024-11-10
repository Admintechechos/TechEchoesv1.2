import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Careers />
          <Contact />
          <footer className="bg-gray-900 text-white py-6 text-center">
              <p> &#169; 2024 TechEchoes Innovation. All rights reserved.</p>
          </footer>
    </div>
  );
}

export default App;