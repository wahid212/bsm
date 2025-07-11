// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  // Logo dayah yang sudah bergabung (contoh)
  const partneredDayah = [
    { name: 'Dayah Al-Manar', logo: '🕌' },
    { name: 'Dayah Ar-Rahman', logo: '🕌' },
    { name: 'Dayah Al-Hikmah', logo: '🕌' },
    { name: 'Dayah An-Nur', logo: '🕌' },
    { name: 'Dayah Al-Falah', logo: '🕌' },
    { name: 'Dayah Al-Ikhlas', logo: '🕌' },
    { name: 'Dayah Al-Furqan', logo: '🕌' },
    { name: 'Dayah As-Salam', logo: '🕌' },
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-gray-950 text-white transition-colors duration-300">
      {/* Partner Dayah Section */}
      <div className="border-b border-secondary-800 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Dayah Partner Kami</h3>
            <p className="text-secondary-300 dark:text-gray-400">
              Lebih dari 50+ dayah telah mempercayai BSM untuk transformasi digital mereka
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partneredDayah.map((dayah, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-secondary-800 dark:bg-gray-800 rounded-lg hover:bg-secondary-700 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="text-3xl mb-2">{dayah.logo}</div>
                <span className="text-sm text-center text-secondary-300 dark:text-gray-400 leading-tight">
                  {dayah.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BSM</span>
            </div>
            <p className="text-secondary-300 dark:text-gray-400 mb-6 max-w-md">
              Boarding School Management - Platform digital yang mengintegrasikan seluruh aspek 
              pengelolaan Bank Santri Munawwarah untuk efisiensi dan transparansi maksimal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Manfaat</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Harga</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Dokumentasi</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Tutorial</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-secondary-300 dark:text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 dark:text-gray-500 text-sm">
              © 2025 BSM (Boarding School Management). Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-secondary-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-secondary-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;