import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BSM</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-gray-600 hover:text-primary-600 transition-colors">
              Beranda
            </a>
            <a href="#fitur" className="text-gray-600 hover:text-primary-600 transition-colors">
              Fitur
            </a>
            <a href="#manfaat" className="text-gray-600 hover:text-primary-600 transition-colors">
              Manfaat
            </a>
            {/* <a href="#kontak" className="text-gray-600 hover:text-primary-600 transition-colors">
              Kontak
            </a> */}
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;