// components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-lg">B</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900">BSM</span>
          </motion.div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['beranda', 'fitur', 'manfaat'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-primary-600 transition-colors capitalize relative"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
          {/* Login Button */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 relative overflow-hidden"
            >
              <span className="relative z-10">Masuk</span>
              <motion.div
                className="absolute inset-0 bg-blue-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
export default Header;